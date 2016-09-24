import * as Promise from "bluebird"

interface IScrape {

}

export default class scrape {
    base_params: any;
    constructor(url: string) {
        let base_params: any;

        if (url.split('//').length < 2) {
            throw Error('please give a valid url')
        } else {



            let uid: string;

            const provider = url.split('//')[1].split('/')[0]

            const query = url.split(provider)[1]


            switch (provider) {


                case "facebook.com":

                    throw Error('todo')

                case "www.youtube.com":
                    uid = query.split('v=')[1].split('&')[0]

                    base_params = {
                        uid: uid,
                        provider: 'youtube',
                        img: 'http://img.youtube.com/vi/' + uid + '/default.jpg',
                        hqimg: 'http://img.youtube.com/vi/' + uid + '/hqdefault.jpg',
                        mqimg: 'http://img.youtube.com/vi/' + uid + '/mqdefault.jpg',
                        sdimg: 'http://img.youtube.com/vi/' + uid + '/sddefault.jpg',
                        maximg: 'http://img.youtube.com/vi/' + uid + '/maxresdefault.jpg',
                        url:url

                    }

                    break;


                case "youtube.com":

                    uid = query.split('v=')[1].split('&')[0]

                    base_params = {
                        uid: uid,
                        provider: 'youtube',
                        img: 'http://img.youtube.com/vi/' + uid + '/default.jpg',
                        hqimg: 'http://img.youtube.com/vi/' + uid + '/hqdefault.jpg',
                        mqimg: 'http://img.youtube.com/vi/' + uid + '/mqdefault.jpg',
                        sdimg: 'http://img.youtube.com/vi/' + uid + '/sddefault.jpg',
                        maximg: 'http://img.youtube.com/vi/' + uid + '/maxresdefault.jpg',
                        url:url

                    }
                    break;

                default:

                    throw Error('provider is not supported')

            }



        }
        this.base_params = base_params

    }


}