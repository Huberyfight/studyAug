window.onload=function(){
  Vue.config.devtools=true;
  Vue.config.productionTip=false;

  let vm = new Vue({
    el:'.container',
    data:{
      users:[
        {name:'Tom',age:34,email:'huber@qq.com'},
        {name:'Jack',age:14,email:'fight@qq.com'}
      ],
      user:{},
      nowIndex:[],
    },
    methods:{
        addUser(){
          this.users.push(this.user);
          this.user={};
        },
        deleteUser(){
          // var obj={};
          for(var i=0;i<this.users.length;i++){
            // obj=this.users[i];
            for(var j=0;j<this.nowIndex.length;j++){
              if(this.users[i].name==this.nowIndex[j]){
                this.users.splice(i,1);

              }
            }
          }
          this.nowIndex.splice(0,this.nowIndex.length);
          // if(this.nowIndex==-1){
          //   this.users=[];
          // }else{
          //   this.users.splice(this.nowIndex,1);
          // }

        }
    }
  });


};
