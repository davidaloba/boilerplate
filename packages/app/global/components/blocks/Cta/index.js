import delve from 'dlv'
import Link from 'next/link'

const Cta = ({ title, text, buttons, theme }) => {
  return (
    <div className={`bg-${theme}`}>
      <div className="lg:flex lg:items-center lg:justify-between w-2/3 mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
          {title && <span className="block">{title}</span>}
          {text && <span className="block text-white">{text}</span>}
        </h2>
        <div className="lg:mt-0 lg:flex-shrink-0 space-x-2">
          {buttons &&
            buttons.map((button, index) => (
              <div
                className="mt-4 md:mt-4 inline-flex rounded-md shadow"
                key={`ctaButton-${index}`}>
                <Link
                  href={button.link.href}
                  key={`cta-button-${index}`}
                  target={button.link.target}>
                  <button
                    type="button"
                    className={`py-4 px-6 bg-${(button, 'theme')} hover:bg-${
                      (button, 'theme')
                    }-darker focus:ring-${(button, 'theme')}-lighter text-${
                      (button, 'theme')
                    }-text w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg`}>
                    {button.link.label}
                  </button>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

Cta.defaultProps = {}

export default Cta
