javascript:var comment_list=document.getElementsByClassName("cwj9ozl2 tvmbv18p")[0],get_data=comment_list.getElementsByClassName("l9j0dhe7 ecm0bbzt rz4wbd8a qt6c0cv9 dati1w0a j83agx80 btwxx1t3 lzcic4wl"),str=[];for(const t of get_data){var user_name=t.outerHTML.match(/(?<=auto">).*?(?=<\/span>)/g)[0],avatar=t.outerHTML.match(/(?<=xlink:href=").*?(?=")/g)[0].replace(/amp;/g,""),user_link=t.outerHTML.match(/(?<=href=").*?(?=")/g)[0].replace(/(\?|&amp;)comment.+|\?__.+|http.*?com|\/group.*?user/g,""),content=t.outerHTML.match(/(?<=start;">).*?(?=<\/div>)/g)[0].replace(/<.*?alt="|" refer.*?<\/span>/g,"");str+='=IMAGE("'+avatar+'")\t'+user_name+"\thttps://www.facebook.com"+user_link+"\t"+content+"\n"}function copy(t){var e=document.createElement("textarea");document.body.appendChild(e),e.value=t,e.focus(),e.select(),document.execCommand("Copy"),e.remove()}copy(str);
