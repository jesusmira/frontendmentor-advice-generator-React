import { useFetchAdvice } from '../hooks/useFetchAdvice';

export const Advice = () => {

  const { note, isLoading, fetchAdvice } = useFetchAdvice();
  
  return (<>
          {
            isLoading ? (
              <div className="card-title">
              Loading...
            </div>)
          
           : (<>
          <div className="card">
            <div className="card-body">
                <h3 className="card-title">Advice # {note.id}</h3>
                <blockquote className="card-text" >
                {note.advice}
                </blockquote>
                <span className="divider"></span>
            </div>
          </div>
          <button type="button " className="btn-input" onClick={fetchAdvice}></button>
          
          </>)
        }  
    </>
  )
}
