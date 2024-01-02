import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { TypeUserState } from '@/store/store'

export const useTypedSelector: TypedUseSelectorHook<TypeUserState> = useSelector
