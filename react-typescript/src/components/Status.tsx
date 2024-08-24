type StstusProps = {
    status: 'loading' | 'success' | 'error'
}

export const Status = (props: StstusProps) => {
  return (
    <div>
        {props.status}
    </div>
  )
}
