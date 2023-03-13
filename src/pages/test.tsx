import React from 'react'
import * as DOMPurify from 'isomorphic-dompurify'

import ApiClient from 'utils/ApiClient'

const test: React.FC<{ article: string }> = ({ article }) => {
  return (
    <div
      className="inner-html dir-rtl p-10"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: article }}
    />
  )
}

export const getServerSideProps = async () => {
  try {
    const response = await ApiClient({
      method: 'GET',
      url: '/category/3'
    })
    return {
      props: {
        article: DOMPurify.sanitize(response.data?.success)
      }
    }
  } catch (error) {
    console.log(error)
  }

  return {
    props: {}
  }
}

export default test
