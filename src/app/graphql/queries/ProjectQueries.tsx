import { useQuery, gql } from "@apollo/client";
export const ALL_PROJECT = gql`
  query SearchProject($name: String, $type: String, $status: String) {
  searchProject(name: $name, type: $type, status: $status) {
    id
    name
    user {
      email
      id
      name
      avatar_attachment
    }
    members{
        id
        position
        memberUserId    
        memberUser{
            id
            name
            avatar_attachment
        }
    }
    attachments
    authorUserId
    category
    description
    level
    privacy
    version
    budget
    type
    salary
    status
    contentStatus
    memberJoin
    is_recruit
    is_involved
    createdAt
    updatedAt
  }
}`;

export function DetailProject (){
const DETAIL_PROJECT = gql`
  query DetailProject($detailProjectId: ID) {
  detailProject(id: $detailProjectId) {
    id
    name
    user {
      email
      id
      name
      phone_number
      avatar_attachment
    }
    members{
        id
        position
        memberUser{
            id
            name
            avatar_attachment
        }
    }
    attachments
    authorUserId
    category
    description
    level
    privacy
    version
    budget
    type
    salary
    status
    contentStatus
    memberJoin
    framework
    programingLanguage
    is_recruit
    is_involved
    createdAt
    updatedAt
    timeToDo
  }
}
`;
const { loading, error, data } = useQuery(DETAIL_PROJECT,{
    variables: {   detailProjectId: "30" },
  });
  const detailProject = data?.detailProject
  return detailProject
}