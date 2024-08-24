export type ProfileProps = {
    name: string
}
export const Profile = ({ name }: ProfileProps) => {
  return (
    <div>
        <h1>Private Profile: {name} </h1>
    </div>
  )
}
