import * as Promise from "bluebird"

interface IScrapeBaseParams {
    uid: string;
    provider: string;
    url: string;

    iframe_src?: string;


    img?: string;

    hqimg?: string;
    mqimg?: string;
    sdimg?: string;
    maximg?: string;
}

export default class scrape {
    base_params: IScrapeBaseParams;
    constructor(url: string) {
        let base_params=<IScrapeBaseParams>{};

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
                    uid = query.split('v=')[1].split('&')[0];

                    base_params.uid = uid;
                    base_params.provider = 'youtube';
                    base_params.img = 'http://img.youtube.com/vi/' + uid + '/default.jpg'
                    base_params.hqimg = 'http://img.youtube.com/vi/' + uid + '/hqdefault.jpg'
                    base_params.mqimg = 'http://img.youtube.com/vi/' + uid + '/mqdefault.jpg'
                    base_params.sdimg = 'http://img.youtube.com/vi/' + uid + '/sddefault.jpg'
                    base_params.maximg = 'http://img.youtube.com/vi/' + uid + '/maxresdefault.jpg'
                    base_params.url = url;
                    base_params.iframe_src = 'http://youtube.com/embed/' + uid;



                    break;


                case "youtube.com":

                    uid = query.split('v=')[1].split('&')[0];

                    base_params.uid = uid;
                    base_params.provider = 'youtube';
                    base_params.img = 'http://img.youtube.com/vi/' + uid + '/default.jpg'
                    base_params.hqimg = 'http://img.youtube.com/vi/' + uid + '/hqdefault.jpg'
                    base_params.mqimg = 'http://img.youtube.com/vi/' + uid + '/mqdefault.jpg'
                    base_params.sdimg = 'http://img.youtube.com/vi/' + uid + '/sddefault.jpg'
                    base_params.maximg = 'http://img.youtube.com/vi/' + uid + '/maxresdefault.jpg'
                    base_params.url = url;
                    base_params.iframe_src = 'https://youtube.com/embed/' + uid;


                    break;

                default:

                    throw Error('provider is not supported')

            }



        }
        this.base_params = base_params

    }


}