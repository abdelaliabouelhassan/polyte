import { defineStore } from 'pinia'


export const useStore = defineStore('NewProjectStore', {
    state: () => {
        return {
            NewProject:{
                name:'',
                color:'#001324',
            },
            ProjectBriefing:{
                content:'',
            },
            InviteContent:{
                email:'',
            },
            Permissions:{
                Privat:false,
                permissions:[],
            }
        } 
    },
    actions: {
        clear(){
            this.NewProject = {
                name:'',
                color:'#001324',
            }
            this.ProjectBriefing = {
                content:'',
            }
            this.InviteContent = {
                email:'',
            }
            this.Permissions = {
                Privat:false,
                permissions:[],
            }
        }
    },
  
 
})