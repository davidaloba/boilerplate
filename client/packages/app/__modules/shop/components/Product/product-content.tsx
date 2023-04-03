import Link from 'next/link'
import { getStrapiMedia } from 'packages/global/utils/index'
import SocialLogo from '@marketingComponents/__lib/SocialLogo'
import Information from './product-details'
import OpeningHours from './opening-hours'
import Price from './price'
import Gallery from './gallery'
import ReviewSummary from './review-summary'
import OverallRating from './overall-rating'
import Reviews from './reviews'
import Stars from './stars'

const ProductContent = ({ name, category, tag, images, content, reviews: reviewsData }) => {
  const price = content.price
  const socialNetworks = content.socialNetworks
  const information = content.information
  const reviews = reviewsData.reviews.data

  const description = information.description
  const opening_hours = information.opening_hours
  const location = information.location

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden mt-40">
        <Link href={`shop`}>
          <button
            type="button"
            className="ml-2 py-4 px-6 bg-secondary hover:bg-secondary-darker text-gray-50 w-1/8 text-center ase font-semibold shadow-sm rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
          </button>
        </Link>
        <div className="mx-auto md:flex md:flex-wrap">
          <div className="lg:flex lg:flex-wrap w-full lg:w-1/2">
            <div className="p-2 md:w-full">
              <img
                alt={images.data[0].attributes.alternativeText}
                className="object-center block object-cover"
                src={getStrapiMedia(images.data[0].attributes.url)}
              />
              <Gallery images={images.data} />
            </div>
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 p-4">
            {category.data && (
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {category.data.attributes.name}
              </h2>
            )}
            {name && <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{name}</h1>}
            <div className="flex mb-4">
              <span className="flex items-center">
                <Stars reviews={reviews} />
                <ReviewSummary reviews={reviews} />
              </span>

              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                <Price price={price} />
              </span>

              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                {socialNetworks &&
                  socialNetworks.map((network, index) => (
                    <SocialLogo
                      url={network.url}
                      size="20"
                      key={index}
                    />
                  ))}
              </span>
            </div>

            {description && <p className="leading-relaxed mb-10">{description}</p>}

            <OpeningHours opening_hours={opening_hours} />
            <Information information={information} />
          </div>
        </div>
      </section>
      <div className="text-center pt-40">
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Reviews
        </p>
      </div>
      {reviews && (
        <div className="md:grid md:grid-cols-2 gap-4 mt-20">
          <OverallRating reviews={reviews} />
          <Reviews reviews={reviews} />
        </div>
      )}
    </div>
  )
}

export default ProductContent