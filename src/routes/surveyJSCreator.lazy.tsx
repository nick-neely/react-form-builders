import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/surveyJSCreator')({
  component: () => <div>Hello /surveyJSCreator!</div>
})