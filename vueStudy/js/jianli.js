window.onload=function(){
  let vm = new Vue({
    el:'#el',
    data:{
      code:'',
      finalCode:`
        body{
          background-color: #ccc;
        }
      `,
    },
    created:function(){
      var n=0;
      setInterval(()=>{
        if(n==this.finalCode.length)return;
        this.code=this.finalCode.substring(0,n);
        n+=1;
      },10)
    },
    computed:{
      styleCode:function(){
        return '<style>'+this.code+'</style>';
      }
    }
  });
}
