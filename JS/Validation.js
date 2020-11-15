/**
 * Create class Validation to check data form
 */
function ValidationCheckForm (){
    /**
     * Kiểm tra rổng
     * input: {dữ liệu từ input id} value 
     * input: {id thông báo} spanID  
     * input: {tin nhắn thông báo} message  
     * output: Boolean
     */
    this.kiemTraRong = function(value,spanID,message) {
        if(value == ""){
            // nếu sai
            // thông báo lỗi và hiển thị 
            getELE(spanID).innerHTML = message;
            getELE(spanID).style.display = "block";
            // trả về true false 
            return false
        }else {
            // nếu đúng
            // xóa thông báo lỗi và ẩn đi 
            getELE(spanID).innerHTML = " ";
            getELE(spanID).style.display = "none"
            // trả về true false 
            return true
        }
    }
    /**
     * Kiểm tra mã nhân viên có bị trùng không ?
     * input: {dữ liệu từ input id} value 
     * input: {mãng nhân viên} mangNV 
     * input: {id thông báo} spanID  
     * input: {tin nhắn thông báo} message  
     * output: Boolean
     */
    this.kiemTraMaNV = function(value, mangNV, spanID, message){
        let result = mangNV.some((el) => 
            el.maNV == value)
        // console.log(result);
        if(result === true){
            // mảng bị trùng 
            getELE(spanID).innerHTML = message;
            getELE(spanID).style.display = "block";
            return false
        }else {
            getELE(spanID).innerHTML = " ";
            getELE(spanID).style.display = "none"
            return true
        }
    }
    /**
     * Kiểm tra tên có số hay không
     * input: {dữ liệu từ input id} value 
     * input: mãng chứa value
     * input: {id thông báo} spanID  
     * input: {tin nhắn thông báo} message  
     * output: Boolean
     */
    this.kiemTraTen = function(value, spanID,message) {
        // let regex = new RegExp("([0-9A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ']+\\s?\\b){2,}");
        var regex = new RegExp(
            "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
              "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
              "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"
          );
        console.log(regex.test(value))
        console.log(value);
        if(regex.test(value)){
            // nếu sai
            // thông báo lỗi và hiển thị 
            getELE(spanID).innerHTML = " ";
            getELE(spanID).style.display = "none"
            // trả về true false 
            return true
        }else{
            // nếu đúng
            // xóa thông báo lỗi và ẩn đi 
            getELE(spanID).innerHTML = message;
            getELE(spanID).style.display = "block";
            // trả về true false 
            return false
        }
    }
    /**
     * Kiểm tra chức vụ có được chọn hay không
     * input: lấy id để check index của option
     * input: {id thông báo} spanID  
     * input: {tin nhắn thông báo} message
     * output: Boolean
     * description: không so sánh cụm từ vì dễ bị đổi.  nên sử dụng SelectedID để lấy index nếu index lớn hơn 0 thì đúng
     */
    this.kiemTraChucVu = function(selectID, spanID, message){
        if(getELE(selectID).selectedIndex != 0){
            getELE(spanID).innerHTML = " ";
            getELE(spanID).style.display = "none";
            return true
        }else {
            getELE(spanID).innerHTML = message ;
            getELE(spanID).style.display = "block"
            return false;
        }
    }
    /**
     * Kiểm tra lương cơ bản có là số hay không
     * input: lấy id để check index của option
     * input: {id thông báo} spanID  
     * input: {tin nhắn thông báo} message
     * output: Boolean
     */
    this.kiemTraLuongCB = function(value, spanID, message){
         var regex = /^[0-9]+(\.[0-9]{1,2})?$/gm;
        console.log(regex.test(value))
        console.log(value);
        if(regex.test(value)){
            // nếu sai
            // thông báo lỗi và hiển thị 
            getELE(spanID).innerHTML = " ";
            getELE(spanID).style.display = "none"
            // trả về true false 
            return true
        }else{
            // nếu đúng
            // xóa thông báo lỗi và ẩn đi 
            getELE(spanID).innerHTML = message;
            getELE(spanID).style.display = "block";
            // trả về true false 
            return false
        }
    }
    /**
     * Kiểm tra giờ
     * input: lấy id để check index của option
     * input: {id thông báo} spanID  
     * input: {tin nhắn thông báo} message
     * output: Boolean
     */
    this.kiemTraGio = function(selectID, spanID, message){
        var regex = /^[0-9]+(\.[0-9]{1,2})?$/gm;
       console.log(regex.test(value))
       console.log(value);
       if(regex.test(value)){
           // nếu sai
           // thông báo lỗi và hiển thị 
           getELE(spanID).innerHTML = " ";
           getELE(spanID).style.display = "none"
           // trả về true false 
           return true
       }else{
           // nếu đúng
           // xóa thông báo lỗi và ẩn đi 
           getELE(spanID).innerHTML = message;
           getELE(spanID).style.display = "block";
           // trả về true false 
           return false
       }
   }
}