import React from 'react'

const Contact=()=> {
  return (
    <section data-section-id="1" data-share="" data-category="contact" data-component-id="c6db1a39_04_awz" class="py-20 md:py-40 bg-black overflow-hidden">
        <div class="container px-4 mx-auto">
          <div class="flex flex-wrap items-end -mx-4">
            <div class="w-full xl:w-auto px-4 mb-32 xl:mb-0">
              <div class="max-w-xl 2xl:max-w-3xl mx-auto">
                <div class="inline-flex items-center px-5 py-2 bg-white rounded-full mb-10">
                  <span class="block w-2 h-2 mr-2 rounded-full bg-indigo-500"></span>
                  <span class="uppercase text-sm font-medium tracking-tight" data-config-id="auto-txt-1-4">CONTACT</span>
                </div>
                <h1 class="text-5xl xs:text-7xl xl:text-10xl font-heading text-white font-semibold mb-16" data-config-id="auto-txt-2-4">Get in touch and let us know how we can help</h1>
                <p class="text-2xl text-gray-200 mb-32 xl:mb-48" data-config-id="auto-txt-3-4">Well help you distribute your podcast to Spotify, Apple and Google Podcasts.</p>
                <form action="">
                  <div class="flex flex-wrap items-end -mx-5 mb-12">
                    <div class="w-full md:w-1/2 px-5 mb-12 md:mb-0">
                      <div class="relative pb-3 border-b border-gray-400">
                        <span class="block text-gray-200 mb-1" data-config-id="auto-txt-4-4">Name</span>
                        <input class="w-full text-2xl bg-transparent outline-none text-white placeholder-white" type="text" placeholder="eydis" data-config-id="auto-input-1-4"/>
                      </div>
                    </div>
                    <div class="w-full md:w-1/2 px-5">
                      <div class="relative pb-3 border-b border-gray-400">
                        <input class="w-full text-2xl bg-transparent outline-none text-white placeholder-white" type="text" placeholder="E-mail" data-config-id="auto-input-2-4"/>
                      </div>
                    </div>
                  </div>
                  <div class="relative mb-12 pb-3 border-b border-gray-400">
                    <input class="w-full text-2xl bg-transparent outline-none text-white placeholder-white" type="text" placeholder="Topic" data-config-id="auto-input-3-4"/>
                  </div>
                  <div class="relative h-12 mb-14 pb-3 border-b border-gray-400"><textarea class="w-full text-2xl bg-transparent outline-none text-white placeholder-white resize-none" placeholder="Your Message" data-config-id="auto-input-4-4"></textarea></div>
                  <div class="flex mb-16 items-center">
                    <input type="checkbox" value="" id="" data-config-id="auto-input-5-4"/>
                    <label class="ml-4 text-sm text-gray-300" for="" data-config-id="auto-txt-5-4">Please sign me up for the newsletter.</label>
                  </div>
                  <a class="group relative inline-block h-16 w-full sm:w-44 bg-white rounded" href="#">
                    <div class="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
                      <div class="flex h-full w-full items-center justify-center bg-black border-2 border-white rounded">
                        <span class="text-base font-semibold text-white uppercase" data-config-id="auto-txt-6-4">Contact</span>
                      </div>
                    </div>
                  </a>
                </form>
              </div>
            </div>
            <div class="w-full xl:w-auto px-4">
              <div class="max-w-xl mx-auto">
                <div class="xs:flex items-start mx-auto mb-24 md:mb-44">
                  <div class="mr-6">
                    <div class="flex mb-8 items-end">
                      <div class="flex mr-8 items-center justify-center w-40 h-14 text-center bg-white rounded-3xl">
                        <span class="text-2xl font-medium leading-none" data-config-id="auto-txt-7-4">Hello!👋</span>
                      </div>
                      <div>
                        {/* <img src="suncealand-assets/images/photo-man-purple-bg.png" alt="" data-config-id="auto-img-1-4"> */}
                      </div>
                    </div>
                    <div class="ml-auto w-52 px-8 pt-10 pb-8 rounded-3xl bg-gray-800">
                      {/* <img class="block mb-10" src="suncealand-assets/logos/chat-logo.svg" alt="" data-config-id="auto-img-2-4"> */}
                      <h5 class="text-2xl font-medium text-white" data-config-id="auto-txt-8-4">Chat</h5>
                      <span class="text-gray-300" data-config-id="auto-txt-9-4">Livechat w/ Tony</span>
                    </div>
                  </div>
                  <div class="w-52 mt-10 px-8 pt-10 pb-8 rounded-3xl bg-gray-800">
                    {/* <img class="block mb-10" src="suncealand-assets/logos/slack-logo.svg" alt="" data-config-id="auto-img-3-4"> */}
                    <h5 class="text-2xl font-medium text-white" data-config-id="auto-txt-10-4">Slack</h5>
                    <span class="text-gray-300" data-config-id="auto-txt-11-4">Contact on Slack</span>
                  </div>
                </div>
                <div class="-mb-4 sm:text-right">
                  <a class="inline-flex mb-4 mr-8 items-center" href="#">
                    {/* <img class="mr-4" src="suncealand-assets/logos/messanger-logo.svg" alt="" data-config-id="auto-img-4-4"> */}
                    <span class="text-white" data-config-id="auto-txt-12-4">suncea_land</span>
                  </a>
                  <a class="inline-flex mb-4 items-center" href="#">
                    {/* <img class="mr-4" src="suncealand-assets/logos/snapchat-logo.svg" alt="" data-config-id="auto-img-5-4"> */}
                    <span class="text-white" data-config-id="auto-txt-13-4">suncea_land</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Contact