import React from 'react'

const ContentContext = React.createContext({})

export const ContextProvider = ContentContext.Provider

export const ContextConsumer = ContentContext.Consumer