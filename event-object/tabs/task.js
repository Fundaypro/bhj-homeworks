class Tabs {
    constructor(){
        this.tabsContainer = document.getElementById("tabs1");
        this.tabsContent = Array.from(this.tabsContainer.querySelector(".tab__contents").children);
        this.tabsNovigation = Array.from(this.tabsContainer.querySelector(".tab__navigation").children);
        this.tabsNovigation.forEach((el,i)=>{
            el.addEventListener("click",()=>{
                this.revealTab(i)
            })
        })
    }
    revealTab(num){
        this.hideAllTabs();
        this.tabsContent[num].className = "tab__content tab__content_active";
        this.tabsNovigation[num].className = "tab tab_active"
    }
    hideAllTabs(){
        this.tabsContent.forEach((elem, i)=>{
            elem.className = "tab__content";
            this.tabsNovigation[i].className = "tab"
        });
        
    }
}
const tab = new Tabs();