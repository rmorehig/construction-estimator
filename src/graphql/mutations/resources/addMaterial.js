import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { useNotifications } from 'context/notifications';
export const ADD_MATERIAL = gql`
  mutation addMaterial($objects: [material_insert_input!]!) {
    insert_material(objects: $objects) {
      returning {
        id
      }
    }
  }
`;

export const useAddMaterial = () => {
  const { push } = useHistory();
  const { setMessage } = useNotifications();
  let [mutate, { data, loading, error }] = useMutation(ADD_MATERIAL, {
    onCompleted: () => {
      setMessage('New material created successfully');
      push('/resources');
    },
    onError: () => push('/resources')
  });
  return {
    addMaterial: ({ name, model, manufacturer, material_type_id }) =>
      mutate({
        variables: {
          objects: {
            name,
            model,
            manufacturer,
            material_type_id
          }
        }
      }),
    data,
    error,
    loading
  };
};
