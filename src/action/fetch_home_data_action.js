
import thunk from 'redux-thunk'


export const fetch_home_data_action=()=>{
    return (dispatch)=>{
        let num;
        let items=[]
        for(num=1;num<100;num++){
            let item={}
            fetch(`https://www.superheroapi.com/api.php/1233073363709350/${num}`)
            .then(res=>{
              return res.json();
            })
            .then(data=>{
                item.image=data.image.url;

                item.id=data.id;
                items.push(item)
                // console.log(data.image.url)
                if(items.length===num-1)
                dispatch({
                    type:"Get",
                    payload:items
                })
            })
           
        }
     
           
    }
}

// marvel superheroes only
export const fetch_home_marvel_data_action=()=>{
    return (dispatch)=>{
        let num;
        let items=[]
        for(num=1;num<100;num++){
            let item={}
            fetch(`https://www.superheroapi.com/api.php/1233073363709350/${num}`)
            .then(res=>{
              return res.json();
            })
            .then(data=>{
                if(data.biography.publisher==="Marvel Comics")
                    item.image=data.image.url;

                    item.id=data.id;
                    items.push(item)
                    console.log(data);
                    
                    if(items.length===num-1)
                    dispatch({
                        type:"marvel_get",
                        payload:items
                    })
                
                
            })
           
        }
     
           
    }
}
//dc superheros only
export const fetch_home_dc_data_action=()=>{
    return (dispatch)=>{
        let num;
        let items=[]
        for(num=1;num<100;num++){
            let item={}
            fetch(`https://www.superheroapi.com/api.php/1233073363709350/${num}`)
            .then(res=>{
              return res.json();
            })
            .then(data=>{
                if(data.biography.publisher==="DC Comics")
                    item.image=data.image.url;

                    item.id=data.id;
                    items.push(item)
                    console.log(data);
                    
                    if(items.length===num-1)
                    dispatch({
                        type:"marvel_get",
                        payload:items
                    })
                
                
            })
           
        }
     
           
    }
}
