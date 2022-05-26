import React from 'react'

function About() {
    return (
        <div id='about' className='p-12'>

            <div className="container">

                <div className="about-content flex gap-x-40 flex-col-reverse justify-between md:flex-row">
                    <div className="text-area grid text-left md:w-full">
                        <h3 className='title leading-3 text-[18px] text-[#0069df] tracking-[11px] font-normal '>KURUMSAL</h3>
                        <div className="sub-title text-[32px] text-[#11161e] font-light pr-16">27 YILDIR GÜZEL İZMİR'İ
                            TEKNOLOJİ VE BİLİŞİMLE DONATIYORUZ.</div>
                        <h5 className='description text-[18px] font-normal leading-7 pr-10'>İzmir Büyükşehir Belediyesi ile Ege Üniversitesi’nin, kent bilgi sistemleri proje ve uygulamaları gerçekleştirebilmesi amacıyla 1994 yılında ÜNİBEL Özel Eğitim ve Bilgi Teknolojileri Sanayi ve Ticaret Anonim Şirketi adıyla bilişim firması olarak kuruldu.</h5>
                        <p className='about-text text-[14px] font-normal leading-7 pr-28 text-[#777777]'>Şirket, 1998 yılına kadar kent bilgi sistemleri konularında çalışmalarını sürdürmüş, aynı zamanda İzmir Büyükşehir Belediyesi kuruluşlarına da bilişim hizmetleri sağlamıştır. Daha sonra, 1998 yılında yapılan değişikliklerle şirket, İzmir Büyükşehir Belediyesi ve kuruluşlarına teknik destek hizmeti sağlayan, Belediye genelinde bilişim projeleri hazırlayan, danışmanlık – müşavirlik hizmetleri yürüten organizasyon yapısına kavuştu.</p>
                    </div>
                    <div className="image md:w-full">
                        <img className='' src="https://www.izmirteknoloji.com.tr/Content/iztekContent/images/page/kurumsal.jpg" alt="" />

                    </div>
                </div>
            </div>

        </div>
    )
}

export default About