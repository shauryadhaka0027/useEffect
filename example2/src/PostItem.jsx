export default function PostItem({id,title}){
    return(
        <>
         <div key={id}>
    <span>{id} .</span>
         <span>{title}</span>

         </div>
        </>
    )
}