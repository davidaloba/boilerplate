import Cta from './cta'
import LocalSwitch from './localSwitch'
import Logo from './logo'
import Nav from './nav'

const Navigation = ({ navigation, pageData, type, locale }) => {
  // 
  return (
    <header className="text-gray-600 bg-white body-font ">
      {navigation && (
        <div className="container mx-auto px-2 py-3  flex flex-wrap md:flex-row flex-col items-center  justify-between">
          <Logo
            url={navigation.logo.data.attributes.url}
            button={navigation.leftButton}
            locale={locale}
          />
          <div className='flex flex-wrap md:flex-row flex-col items-center justify-end '>
            <Nav
              links={navigation.links}
              locale={locale}
            />
            {navigation.rightButton && (
              <div className="flex">
                <div className="mr-5 py-4 px-6 hidden lg:block"></div>
                <Cta
                  href={navigation.rightButton.href}
                  target={navigation.rightButton.target}
                  label={navigation.rightButton.label}
                />
              </div>
            )}
            <LocalSwitch
                pageData={pageData}
                type={type}
                locale={locale}
                />
          </div>
        </div>
      )}
    </header>
  )
}

Navigation.defaultProps = {}

export default Navigation