import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'
import { useNotifications } from 'context/notifications'
export const ADD_CUSTOMER = gql`
  mutation addCustomer($objects: [customer_insert_input!]!) {
    insert_customer(objects: $objects) {
      returning {
        id
      }
    }
  }
`

export const useAddCustomer = () => {
  const { push } = useHistory()
  const { setMessage } = useNotifications()
  let [mutate, { data, loading, error }] = useMutation(ADD_CUSTOMER, {
    onCompleted: () => {
      setMessage('Cliente creado correctamente')
      push('/customers')
    },
    onError: () => push('/customers'),
  })
  return {
    addCustomer: ({
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
