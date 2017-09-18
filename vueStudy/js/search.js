window.onload=function(){


  let vm = new Vue({
    el:'#el',
    data:{
      keyWord:'',
      result:[],
      now:-1,

    },
    methods:{
      getResult(e){
        if(e.keyCode==38||e.keyCode==40)return;
        this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',{
          params:{
            wd:this.keyWord
          },
          jsonp:'cb',
        }).then(resp=>{
          this.result=resp.data.s;

        })
      },
      changeDown(){
        this.now++;
        if(this.now==this.result.length){
          this.now=0;
        }
        this.keyWord=this.result[this.now];

      },
      changeUp(){
        this.now--;
        if(this.now==-1||this.now==-2){
          this.now=this.result.length-1;
        }
        this.keyWord=this.result[this.now];
      }
    }
  });
}
