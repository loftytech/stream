import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../config/store'
import useRouter from './useRouter'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


export const useResolveFilters = () => {
    const router = useRouter()

    const resolveFilters = (queryObject: any) : any => {
        return new Promise(function (resolve, _reject) {
            setTimeout(function () {
                const queryString: any = {page: router.query?.page ?? 1, limit: router.query?.limit ?? 20, ...router.query};
    
                Object.entries(queryObject).forEach(
                    ([key, value]) => {
                        if (value) {
                            queryString[key] = value
                        } else {
                            if (!queryString[key]) {
                                delete queryString[key]
                            }
                        }
                    }
                );
    
                if (queryString.fromDate && queryString.toDate) {
                    queryString.fromTime = queryString.fromTime ? queryString.fromTime : "00:00";
                    queryString.toTime = queryString.toTime ? queryString.toTime : "23:59";
    
                } else {
                    delete queryString['fromDate']
                    delete queryString['toDate']
                    delete queryString['fromTime']
                    delete queryString['toTime']
                }

                router.replace({ query: { ...queryString } })
    
                resolve(queryString)
            }, 500);
        })
        
    }


    const resolveQueryParams = (queryObject: any) => {
        return new Promise(function (resolve, _reject) {
            setTimeout(function () {
            let queryString = "";
            let index = 0;
            Object.entries(queryObject).forEach(
                ([key, value]) => {
                    index = index+1;
                    if (index == 1) {
                        queryString = queryString + `?${key}=${value}`;
                    } else {
                        queryString = queryString + `&${key}=${value}`;
                    }
                }
            );

            resolve(queryString);

            }, 500);
        })
    }

    return {
        resolveQueryParams,
        resolveFilters
    }
}