import { ReactNode } from 'react'
import ErrorPage from 'next/error'
import { getData, getStrapiURL } from '@utils/index'
import { wrapper } from '@store/index'
import { getPageData, getRunningQueriesThunk, useGetPageDataQuery } from '@store/api'
import Layout from '@components/layouts/layout'
import { Global } from '@__types/models'

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const { url, type } = getData(context.query.slug || '', context.preview)
  const apiUrl = getStrapiURL(url)

  try {
    store.dispatch(getPageData.initiate(apiUrl))
    await Promise.all(store.dispatch(getRunningQueriesThunk()))
    return {
      props: {
        apiUrl,
        type,
        preview: context.preview || null
      }
    }
  } catch (error) {
    return {
      props: { pageData: null }
    }
  }
})

interface PageProps {
  children: ReactNode | undefined
  global: Global
  apiUrl: string
  type: string
  preview: boolean | undefined
}

const Page = ({ children, global, apiUrl, type, preview }: PageProps) => {
  const {
    data: page,
    error: pageDataError,
    isSuccess: pageDataIsSuccess
  } = useGetPageDataQuery(apiUrl)

  if (pageDataError || !page) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout
      page={page}
      pageDataIsSuccess={pageDataIsSuccess}
      global={global}
      type={type}
      preview={preview}>
      {children}
    </Layout>
  )
}
export default Page
