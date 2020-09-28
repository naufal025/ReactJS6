	import React, {Component} from "react";  
	import $ from "jquery";
	class List extends Component {  
	  constructor(){  
	    super();
        this.state = {
            daftar : [
                {bahan: "jeruk"},
                {bahan: "daging"},
				{bahan: "kentang"},
				{bahan: "bawang merah"}
            ],
            bahan: "",
            action: "",
        }
      }  
      	bind = (event) => {  
        	  this.setState({[event.target.name]: event.target.value});  
        	  /* fungsi ini digunakan untuk memasukkan data dari elemen input 
        	  ke variable state. 
        	  contoh ketika input nis diisi, maka secara otomatis variabel nis 
        	  pada state bernilai sesuai dengan inputan 
        	  */  
        	}  
        	  
        	SaveDaftar = (event) =>{  
        	  event.preventDefault();  
        	  // temp digunakan untuk menyimpan sementara  
          // data array siswa  
        	  let temp = this.state.daftar;  
        	  
        	  if (this.state.action === "insert") {  
        	    // temp akan ditambahkan dengan data siswa yang baru  
        	    // sesuai dengan data yang dimasukkan pada form  
        	    temp.push({  
        	      bahan: this.state.bahan  
        	    });  
        	  } else if (this.state.action === "update") {  
        	    // mencari index data yang akan diubah  
        	    let index = temp.findIndex(item => item.bahan === this.state.bahan);  
        	    // mengubah data array sesuai dengan masukan pada form  
        	    temp[index].bahan = this.state.bahan;  
        	  }  
        	  
        	  
        	  // array siswa diupdate dengan nilai data temp  
        	  this.setState({daftar: temp});  
        	  
        	  // menutup modal  
        	  $("#modal").modal('hide');  
        	}  
        	  
        	Add = () => {  
        	  // mengosongkan nilai nis, nama, dan alamat  
        	  // pada saat tombol add ditekan  
        	  this.setState({  
        	    bahan: "",  
        	    action: "insert"  
        	  });  
        	}  
        	  
        	Edit = (item) => {  
        	  this.setState({  
        	    bahan: item.bahan,  
        	    action: "update"  
        	  });  
        	}  
        	  
        	Drop = (index) => {  
        	  // temp digunakan untuk menyimpan sementara  
        	  // data array siswa  
        	  let temp = this.state.daftar;  
        	  
        	  // menghapus data pada index yang dihapus  
        	  temp.splice(index,1);  
        	  
        	  // array daftar diupdate dengan nilai data temp  
        	  this.setState({daftar: temp});  
        	}  
	  render(){  
	    return (  
            <div className="container">  
            	        { /* generate list */ }  
            	        <ul className="list-group">  
                      {this.state.daftar.map((item,index) => {  
            	            return (  
            	              <li className="list-group-item" key={index}>  
            	                <h5 className="text-info">{item.nama}</h5>  
           	                <h6>bahan: {item.bahan}</h6>  
    
           	  
            	                <button className="btn btn-sm btn-primary m-1" onClick={() => this.Edit(item)}  
            	                data-toggle="modal" data-target="#modal">  
            	                  Edit  
            	                </button>  
            	                <button className="btn btn-sm btn-danger m-1" onClick={() => this.Drop(index)}>  
                                	Hapus  
                                </button>  
                                </li>  
            	                );  
            	                })}  
            	        </ul>  
            	        <button className="btn btn-sm btn-success m-3" onClick={this.Add}  
            	        data-toggle="modal" data-target="#modal">  
            	          Tambah Data  
            	        </button>  
            	  
                    { /* elemen form modal */ }  
            	        <div className="modal fade" id="modal">  
            	          <div className="modal-dialog">  
            	            <div className="modal-content">  
        	              <div className="modal-header bg-success text-white">  
            	                <h5>Daftar Belanja</h5>  
            	              </div>  
            	              <form onSubmit={this.SaveDaftar}>  
                          <div className="modal-body">  
                                Bahan-Bahan 
            	                <input type="text" name="bahan" className="form-control" onChange={this.bind}  
            	                value={this.state.bahan} />  
                         </div>  
            	              <div className="modal-footer">  
                            <button type="submit" className="btn btn-primary">  
                              Simpan  
                            </button>  
            	              </div>  
            	              </form>  
                        </div>  
            	          </div>  
            	        </div>  
            	      </div>  
            	    );  
            	  }  
          
	  }  
	
	export default List;  
