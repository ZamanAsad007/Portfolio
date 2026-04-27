import useRevealOnScroll from '../hooks/useRevealOnScroll.js'

function getTimeOfDay(date = new Date()) {
  const hour = date.getHours()

  if (hour >= 5 && hour <= 11) return 'morning'
  if (hour >= 12 && hour <= 16) return 'afternoon'
  return 'evening'
}

export default function IntroSection() {
  const { ref: sectionRef, revealed } = useRevealOnScroll()

  const greetingColors = {
    morning: '#F59E0B',
    afternoon: '#0EA5E9',
    evening: '#A78BFA',
  }

  const timeOfDay = getTimeOfDay(new Date())
  const greetingPart =
    timeOfDay === 'morning'
      ? 'Morning'
      : timeOfDay === 'afternoon'
        ? 'Afternoon'
        : 'Evening'

  const greetingColor = greetingColors[timeOfDay] ?? greetingColors.evening

  return (
    <section
      ref={sectionRef}
      className={
        (revealed
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-6') +
        ' flex min-h-[calc(100svh-6rem)] items-center py-16 transition-all duration-700 ease-out'
      }
    >
      <div className="w-full text-center">
        <h1 className="font-heading mt-3">
          <span className="inline-flex flex-col items-center gap-2">
            <span className="whitespace-nowrap text-5xl font-semibold tracking-tight text-slate-200 sm:text-6xl lg:text-7xl">
              <span>Good </span>
              <span style={{ color: greetingColor }}>{greetingPart}</span>,
            </span>

            <span className="inline-flex items-center gap-3 whitespace-nowrap text-3xl font-semibold tracking-tight text-slate-200 sm:text-4xl lg:text-5xl">
              <span>My Name is Asif.</span>
              <img
                src="/wave.gif"
                alt="Waving hand"
                className="h-11 w-11 select-none sm:h-14 sm:w-14 lg:h-16 lg:w-16"
                loading="lazy"
                decoding="async"
              />
            </span>
          </span>
        </h1>
        <br />
        
        <p className="font-body mt-5 !text-center text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
          23 year old MERN developer from Dhaka, Bangladesh.
          <img
            src="/bd-flag.svg"
            alt="Bangladesh"
            className="ml-2 inline-block h-5 w-5 align-text-bottom sm:h-6 sm:w-6"
            loading="lazy"
            decoding="async"
          />
          <br />
          Still Learning, Still Growing.
          
        </p>
      </div>
    </section>
  )
}
