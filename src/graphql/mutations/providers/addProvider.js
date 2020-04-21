import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'
export const ADD_PROVIDER = gql`
  mutation addProvider($objects: [provider_insert_input!]!) {
    insert_provider(objects: $objects) {
      returning {
        id
      }
    }
  }
`

export const useAddProvider = () => {
  const { push } = useHistory()
  let [mutate, { data, loading, error }] = useMutation(ADD_PROVIDER, {
    onCompleted: () => push('/providers'),
    onError: () => push('/providers'),
  })
  return {
    addProvider: ({
      name,
      code,
      website,
      email,
      phone,
      address,
      postal_code,
      city,
      province,
      country,
    }) =>
      mutate({
        variables: {
          objects: {
            entity: {
              data: {
                name,
                code,
                website,
                email,
                phone,
                address,
                postal_code,
                city,
                province,
                country,
              },
            },
          },
        },
      }),
    data,
    error,
    loading,
  }
}
