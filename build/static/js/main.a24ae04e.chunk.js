(this.webpackJsonplocal_storage=this.webpackJsonplocal_storage||[]).push([[0],{21:function(e,t,a){e.exports=a(32)},26:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),l=a.n(c),s=a(11),o=a(20),m=a(15),u=a(14),i=Object(n.createContext)(),f=function(e){var t=e.children,a=Object(n.useState)([]),c=Object(u.a)(a,2),l=c[0],s=c[1],f=Object(n.useState)(""),d=Object(u.a)(f,2),p=d[0],k=d[1];return r.a.createElement(i.Provider,{value:{completeTask:function(e){var t=l.find((function(t){return t.id===e})),a=l.indexOf(t),n=Object(m.a)(Object(m.a)({},t),{},{completed:!0});l[a]=n,s(l.map((function(t){return t.id===e?n:t})))},deleteTask:function(e){s(l.filter((function(t){return t.id!==e})))},addTask:function(e){e.preventDefault(),s([].concat(Object(o.a)(l),[{id:Math.floor(100*Math.random()+1),name:p,completed:!1}])),k("")},tasks:l,task:p,setTasks:s,setTask:k}},t)},d=a(1),p=(a(26),function(e){var t=e.children;return r.a.createElement("div",{className:"flex-column"},t)}),k=function(e){var t=e.children;return r.a.createElement("div",{className:"flex-row"},t)},E=function(e){var t=e.task,a=e.completeTask,n=e.deleteTask;return r.a.createElement("div",{className:"task"},r.a.createElement("span",{className:t.completed?"task__name task__name--completed":"task__name",onClick:a},t.name),r.a.createElement("span",{className:"task__delete",onClick:n},"X"))},b=function(e){var t=e.children;return r.a.createElement("div",{className:"msg"},r.a.createElement("p",{className:"msg__text"},t))},g=function(e){var t=e.onSubmit,a=e.value,n=e.onChange;return r.a.createElement("form",{className:"form",onSubmit:t},r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{className:"form__label"},"Tarefa"),r.a.createElement("div",{className:"form__input--aux"},r.a.createElement("input",{className:"form__input",type:"text",value:a,onChange:n,required:!0}),r.a.createElement("button",{className:"btn btn--secondary"},"+"))))},v=function(){var e=Object(n.useContext)(i),t=e.tasks,a=e.setTasks,c=Object(n.useContext)(i),l=c.task,s=c.setTask,o=Object(n.useContext)(i),m=o.completeTask,u=o.deleteTask,f=o.addTask;Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("tasks"));e&&a(e)}),[a]),Object(n.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(t))}),[t,l]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Lista de tarefas"),r.a.createElement(g,{onSubmit:f,value:l,onChange:function(e){return s(e.target.value)}}),t.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null,"Tens ".concat(t.length," ").concat(t.length>1?"tarefas":"tarefa"," por completar")),r.a.createElement(p,null,r.a.createElement(k,null,r.a.createElement("button",{className:"btn btn--primary",onClick:function(){localStorage.clear(),window.location.reload()},style:{marginRight:20}},"Limpar tudo"),r.a.createElement("button",{className:"btn btn--primary",onClick:function(){var e=JSON.parse(localStorage.getItem("tasks")).filter((function(e){return!1===e.completed}));localStorage.setItem("tasks",JSON.stringify(e)),window.location.reload()}},"Limpar completas")),t.map((function(e){return r.a.createElement(E,{task:e,key:e.id,completeTask:function(){return m(e.id)},deleteTask:function(){return u(e.id)}})})))):r.a.createElement(b,null,"N\xe3o tens tarefas pendentes!"))},N=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/",exact:!0,component:v})))};l.a.render(r.a.createElement(f,null,r.a.createElement(s.a,null,r.a.createElement(N,null))),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.a24ae04e.chunk.js.map