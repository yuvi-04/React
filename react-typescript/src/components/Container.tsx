type ContainerProps = {
    styles: React.CSSProperties
}
export const Container = (props: ContainerProps) => {
  return (
    <div style={props.styles}>
        <h2>Hi</h2>
    </div>
  )
}
