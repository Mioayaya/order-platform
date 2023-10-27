import ROUTELIST from "./routeList";
import { Iroute } from "../type";

let MENU:Iroute.Imenu[] = [];

for(let i=0;i<ROUTELIST.length;i++) {
  const child = ROUTELIST[i].children;
  if(child) {
    let item:Iroute.Imenu = {
      key: ROUTELIST[i].key,
      title: ROUTELIST[i].title,
      child: []
    }
    for(let j=0;j<child.length;j++) {
      item.child.push({
        key: child[j].key,
        title: child[j].title,
        path: child[j].path,
        pathName: child[j].pathName
      })
    }
    MENU.push(item)
  }
}

console.log(MENU);


export default MENU;
