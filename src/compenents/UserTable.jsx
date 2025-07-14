import React from 'react'
import '../css/userTable.css'
function UserTable({users,onClose}) {
  if (!Array.isArray(users)) return <p>Veri yok veya hata var.</p>;
  return (
    <div className='table-wrapper'>
        <div className='table-header'>
            <h2>Kullanıcı Tablosu</h2>
            <button onClick={onClose} className='close-btn'>Kapat</button>
        </div>
        <table>
            <thead>
                <tr>
                    <th>AD</th>
                    <th>SOYAD</th>
                    <th>CİNSİYET</th>
                    <th>KAYIT TARİHİ</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map( (user) => (
                        <tr key={user.id}>
                           <td>{user.name}</td>
                           <td>{user.surname}</td>
                           <td>{user.gender}</td>
                           <td>{new Date(user.record_date).toLocaleDateString()}</td>     
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default UserTable;