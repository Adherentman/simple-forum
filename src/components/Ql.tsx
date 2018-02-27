// import * as React from 'react';
// import { gql } from 'apollo-boost';
// import { Query } from 'react-apollo';

// const GET_BOOK = gql`
//   query {
//     books {
//       title
//     }
//   }
// `
// export default class Ql extends React.Component {
//   render(){
//   <Query query={GET_BOOK}>
//     {({ loading, error, data }) => {
//       if (loading) return <div>Loading...</div>;
//       if (error) return <div>Error :(</div>;
//         return (
//           <div>{data.books.title}</div>
//         )
//       }}
//     </Query>
//   }
// }