import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import {HomeRouter} from './router/HomeRouter'
import {AuthRouter} from './router/AuthRouter'
import {ApolloClient,InMemoryCache, ApolloProvider, createHttpLink} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
});

const authLink = setContext((_, { headers }) => {
  // const token = localStorage.getItem('token');

  return {
    headers: {
      ...headers,
      authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYWY0MjliMmI4MDdlMTY1ZWU5MWI5ZDNiMmE5YzQ5OWIxNGFjNjI5OTljNTE3NjcwOWExZDBhMWZjNWM3N2M2NjE1M2Q5Mzc1YzNlZTA0OGMiLCJpYXQiOjE2NDYwMTgzMTUuNDEzMDA4LCJuYmYiOjE2NDYwMTgzMTUuNDEzMDE2LCJleHAiOjE2Nzc1NTQzMTUuMzk4OTk2LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.pPA8BT-V9ZC4nqg76yzTH30SU95SZrrW6SmZ05T7RSJQEm3bvAbuzclM0TfR2l15noTJ4wHueNp3wVVCM601B7sPtGdMi4tf6NHlLAo_kkaotIFUxXReXn7Z0wITbWt6BEKsipG06dRJjoJyWV019SejOIH7Z2jPK0sRL8twIhFbpT4RwvkIzpBF30kNRN08FL2E8oRuyrhNEchbx5-KPyX1BHMccAob9rwFp1qCBQBg9a7FZx7fk-iU0uObBGAcph9AieyB0LtfuB6CkVmNNCmA94KHMVRURNg4EzXdDzib0gwpjz4IKWeSREaGxkUIuCovqgNVN3j76AzzE0bWeSYAJJEJedjoqNRdxR9ZNfHYj5a25nr_v-Now3qgZLwlw97K5232pvmK4DQrx2lPFUJ8w8G2bMXWbWglU08wu3vZDhvHwvYDU8kytGSpvh0BU7dLsaMHahn70YLf3NTfbmOTSazIE54Z4aJjAF9XHg0ly8GM_mABUCMs6yCd8vu11ZDXQZb8J1BQfgZTa_HZC4gXoF_9C7BerH3RThpBvJVp94r6-KvrVJaenz3saQiWAY-V7l0PwABiLWuXc-qmatZoTvA8-q5HDFw3YkYwyyugLCovzaGsPLeG_Qu9hHHYN7RRRNcfCBqFZDE0i-iKvVfBL1nYpSP0l3EGuiCxl4c",

    }

  }

});
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  
  });
  
function App() {
  return (
    <ApolloProvider client={client}>
    <div className="">
      <BrowserRouter>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {[...HomeRouter,...AuthRouter].map((props, key) => (
              <Route key={key} {...props} />
            ))}
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </div>
    </ApolloProvider>
  );
}

export default App;
