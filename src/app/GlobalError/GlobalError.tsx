import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { useAppDispatch, useAppSelector } from '../store.ts'
import { selectAppError } from '../app-selectors.ts'
import { setAppErrorAC } from '../app-reducer.ts'

export const GlobalError = () => {
  const errorMessage = useAppSelector(selectAppError)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage)
      toast.onChange(({ status }) => {
        if (status === 'added') {
          dispatch(setAppErrorAC(null))
        }
      })
    }
  }, [errorMessage, dispatch])

  return <ToastContainer theme='dark' autoClose={3000} />
}

