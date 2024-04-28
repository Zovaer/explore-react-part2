export default function Friend({friend}) {
    const { name, email, address, company } = friend;
    const{name1} =company
    const{zipcode}=address
    return (
        <div className="box">
            <h4>Name:{name}</h4>
            <h4>Email:{email} </h4>
            <h4>ZipCode:{zipcode} </h4>
            <h4>ZipCode:{company.name} </h4>

        </div>
    )
}