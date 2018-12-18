/*
 * @Liang liweiliang QQ:406320591(406320591@QQ.com).
 * @date 2018-08-08,
 * @version 1.0.0
 * @liweiliang Inc. All Rights Reserved
 */
 let Liang = {};
 Liang.install = function(Vue,options){
 	Vue.prototype.$Validate = (_this) => {
 		var _Vaild = _this.dataset.vaild;
 		if(!!_Vaild){
 			var pattern = new RegExp(_Vaild);
 			if(pattern.test(_this.value)){
 				console.log("success");
 			}else{
 				var errmsg = _this.dataset.errmsg;
 				Vue.prototype.$toast({text:errmsg});
 				return false;
 			}
 		}else{
 			console.log("无验证规则");
 		}
 		return true;
 	};
 	Vue.prototype.$Vaild = (formElem) => {
 		var checkResult = true;
 		var elements = formElem.elements;
 		for (var i = 0; i < elements.length; i++) {
 			checkResult = Vue.prototype.$Validate(elements[i]) && checkResult;
 			if(!checkResult){
 				return false;
 			}
 		}
 		return checkResult;
 	};

 	Vue.prototype.$toast = (option) => {
 		var opt = {
 			top:'',
 			width:'',
 			heigth:'',
 			holdtime:3000,
 			text:'提示',
 			callback:''
 		};
 		for(var property in option){
 			opt[property] = option[property];
 		}
 		var toastTpl = Vue.extend({
 			data(){
 				return {
 					toastStyle:{
 						top:opt.top
 					},
 					text:opt.text,
 					extStyle:{
 						width:opt.width,
 						height:opt.height
 					}
 				}
 			},
 			render: function(h){
 				return h(
 					'div',
 					{
 						class: ['Liang-toast'],
 						style: this.toastStyle
 					},
 					[
 					h(
 						'div',
 						{
 							class:['Liang-toast-body'],
 							style: this.extStyle
 						},
 						[
 						h(
 							'div',
 							{class:['Liang-toast-bg']}
 							),
 						h(
 							'div',
 							{
 								class:['Liang-toast-text'],
 								domProps: {
 									innerHTML: this.text
 								}
 							}
 							)
 						]
 						)
 					]
 					)
 			},
 		})
 		var toastVM = new toastTpl();
 		var tpl = toastVM.$mount().$el;
 		document.body.appendChild(tpl);
 		var toastTimer = setTimeout(function(){
 			document.body.removeChild(tpl);
 		},opt.holdtime);
 	};
  Vue.prototype.$load = (option) => {
    const opt = {state:""};
    if(option){
      for(var property in option){
        opt[property] = option[property];
      }

    }
    const tplEle = document.getElementsByClassName("tc");
    if(opt.state == "removeLoad" && tplEle.length){
      document.body.removeChild(tplEle[0]);
      return;
    }
    if(tplEle.length){
      return;
    }
    const loadTpl = Vue.extend({
      data(){
        return {
        }
      },
      render: function(h){
        if(this.state == "removeLoad") return
          return h(
            'div',
            {
              class: ['tc']
            },
            [
            h(
              'div',
              {
                class:['square-move']
              },
              [
              h(
                'i',
                {class:['move']}
                ),
              h(
                'i',
                {class:['move']}
                ),
              h(
                'i',
                {class:['move']}
                ),
              ]
              )
            ] 
            )
      },
    })
    const loadVM = new loadTpl();
    const tpl = loadVM.$mount().$el;
    document.body.appendChild(tpl);
  }
}
export default Liang
