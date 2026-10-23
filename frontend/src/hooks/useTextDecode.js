import { useCallback, useEffect, useRef, useState } from 'react'

const SCRAMBLE_CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ#@$%&*<>~_+/=[]{}'

function buildResolvedItems(text) {
  return text.split('').map((char) => ({
    char,
    status: 'resolved',
  }))
}

function buildFrameItems(targetText, iteration, isScrambling, chars) {
  if (!isScrambling) {
    return buildResolvedItems(targetText)
  }

  const currentIdx = Math.floor(iteration)

  return targetText.split('').map((targetChar, index) => {
    if (targetChar === ' ') {
      return { char: ' ', status: 'resolved' }
    }

    if (index < currentIdx) {
      return { char: targetChar, status: 'resolved' }
    }

    const randomChar = chars[Math.floor(Math.random() * chars.length)]

    if (index === currentIdx) {
      return { char: randomChar, status: 'frontier' }
    }

    return { char: randomChar, status: 'scrambling' }
  })
}

/**
 * Custom hook that creates a hacker / terminal-style text decode scramble animation.
 *
 * @param {string} targetText - The text to decode into.
 * @param {object} [options]
 * @param {number} [options.duration=650] - Total animation duration in milliseconds.
 * @param {number} [options.frameInterval=30] - Milliseconds between frame updates (~33fps).
 * @param {string} [options.chars] - Pool of characters to scramble from.
 */
export default function useTextDecode(targetText = '', {
  duration = 650,
  frameInterval = 30,
  chars = SCRAMBLE_CHARS,
} = {}) {
  const [state, setState] = useState(() => ({
    items: buildResolvedItems(targetText),
    isScrambling: false,
  }))
  const [prevTarget, setPrevTarget] = useState(targetText)

  if (prevTarget !== targetText) {
    setPrevTarget(targetText)
    setState({
      items: buildResolvedItems(targetText),
      isScrambling: false,
    })
  }

  const timerRef = useRef(null)

  const stop = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
    setState({
      items: buildResolvedItems(targetText),
      isScrambling: false,
    })
  }, [targetText])

  const trigger = useCallback(() => {
    if (typeof window === 'undefined' || !targetText) return

    // Honor user preference for reduced motion
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setState({
        items: buildResolvedItems(targetText),
        isScrambling: false,
      })
      return
    }

    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }

    const totalFrames = Math.max(12, Math.floor(duration / frameInterval))
    const step = targetText.length / totalFrames
    let currentIteration = 0

    // Initial frame
    setState({
      items: buildFrameItems(targetText, 0, true, chars),
      isScrambling: true,
    })

    timerRef.current = setInterval(() => {
      currentIteration += step

      if (currentIteration >= targetText.length) {
        clearInterval(timerRef.current)
        timerRef.current = null
        setState({
          items: buildResolvedItems(targetText),
          isScrambling: false,
        })
      } else {
        setState({
          items: buildFrameItems(targetText, currentIteration, true, chars),
          isScrambling: true,
        })
      }
    }, frameInterval)
  }, [chars, duration, frameInterval, targetText])

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [])

  return {
    items: state.items,
    isScrambling: state.isScrambling,
    trigger,
    stop,
  }
}
