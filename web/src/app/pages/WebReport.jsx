import React from 'react';
import {
    useQuery,
    useQueryCache,
    QueryCache,
    ReactQueryCacheProvider,
  } from "react-query";

const WebReport = () => {
    const cache = useQueryCache();
    console.log(cache.getQueryData("customers"));
    return (
        <div>
            WebReport
        </div>
    );
};

export default WebReport;