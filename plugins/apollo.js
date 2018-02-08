import "isomorphic-fetch"

import { ApolloClient } from "apollo-client"
import { HttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"

const httpLink = new HttpLink({
    uri: `${process.env.baseUrl}/graphql`
})

// Create the apollo client
const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    connectToDevTools: true
})

export default apolloClient
