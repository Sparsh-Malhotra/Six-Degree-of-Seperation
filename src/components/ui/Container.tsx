type Props={
    children?:React.ReactNode;
}

const Container:React.FC<Props>=({children})=>{
    return <div className='container-sm'>
        {children}
    </div>
}

export default Container;