import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'
import { Global, Page } from '@siteTypes/models'
import { createSelector } from '@reduxjs/toolkit'

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'}/api`
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  tagTypes: [],
  endpoints: (build) => ({
    getGlobal: build.query({
      query: () =>
        `/global?populate[navigation][populate]=*&populate[footer][populate][footerColumns][populate]=*`,
      transformResponse: (res: { data: Global; [index: string]: object | object[] }) => {
        return res
      }
    }),
    getPageData: build.query({
      query: (url: string) => url,
      transformResponse: (res: { data: Page | Page[]; [index: string]: object | object[] }) => {
        return res
      }
    }),
    getTags: build.query({
      query: () => `/tags?pagination[limit]=99`,
      transformResponse: (res: { [index: string]: object | object[] }) => {
        const data = res.data
        return data
      }
    }),
    getCategories: build.query({
      query: () => `/categories?pagination[limit]=99`,
      transformResponse: (res: { [index: string]: object | object[] }) => {
        const data = res.data
        return data
      }
    }),
    getLatestRepos: build.query({
      query: (username) => {
        const token = process.env.GITHUB_AUTH_TOKEN
        const url = `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`
        const headers = {
          Authorization: `token ${token}`
        }
        const req = {
          url: url,
          method: 'GET',
          headers: headers
        }

        return !token ? url : req
      },
      transformResponse: (res) => {
        const repos = res.items
        const latestSixRepos = repos.splice(0, 12)

        return latestSixRepos
      }
    })
  })
})
export default api

export const {
  useGetGlobalQuery,
  useGetPageDataQuery,
  useGetCategoriesQuery,
  useGetTagsQuery,
  useGetLatestReposQuery,
  util: { getRunningQueriesThunk }
} = api

export const { getGlobal, getPageData } = api.endpoints

// Calling `someEndpoint.select(someArg)` generates a new selector that will return
// the query result object for a query with those parameters.
// To generate a selector for a specific query argument, call `select(theQueryArg)`.
// In this case, the users query has no params, so we don't pass anything to select()
export const selectPageData = api.endpoints.getPageData.select()

const emptyPageData = []

export const selectAllUsers = createSelector(
  selectPageData,
  (pageData) => pageData?.data ?? emptyPageData
)

// export const selectUserById = createSelector(
//   selectAllUsers,
//   (state, userId) => userId,
//   (users, userId) => users.find(user => user.id === userId)
// )
