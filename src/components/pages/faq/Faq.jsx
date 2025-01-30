import React from 'react'
import faqImg from '../../../assets/images/faq.jpg'
import FaqAccordion from './FaqAccordion'

const Faq = () => {

  const faqQuestions = {
    "What is the Criterion Collection?": "The Criterion Collection is a continuing series of important classic and contemporary films on home video. Our editions often include restored film transfers along with commentary tracks and other kinds of supplemental features, which we pioneered with the release of our first laserdiscs, Citizen Kane and King Kong, in 1984. Ever since, Criterion has been working closely with filmmakers and scholars to ensure that each film is presented as its maker would want it seen and published in an edition that will deepen the viewer’s understanding and appreciation of the art of cinema.",
    "How do you decide which films receive the “Criterion treatment”?": "We aim to reflect the breadth of filmed expression. We try not to be restrictive or snobby about what kinds of films are appropriate. An auteur classic, a Hollywood blockbuster, and an independent B horror film all have to be taken on their own terms. All we ask is that each film in the collection be an exemplary film of its kind. Of course, we can’t just pick movies and put them out. The process of getting the rights to release a film can take years. Even if we want a film, we can’t work on it unless the film’s owners grant us the rights to do so.",
    "How do you decide which special features to include? And who contributes to them?": "Each film release has a producer who oversees the entire process, from restoration to supplemental features to packaging. The producer researches available materials, conceives original supplements, and decides what features will truly add value to the appreciation of the film. We are fortunate enough to work with many great film directors, cinematographers, actors, scholars, and critics. We do not let market factors or an arbitrary number of supplements determine our inclusion decisions but make them on a case-by-case basis, with the aim of enhancing the viewer’s experience of a particular film.",
    "Are all your releases presented in their original theatrical aspect ratio?": "Every Criterion release features a section dedicated to technical information about how the film was prepared for home video. Here you will find its aspect ratio, along with information about the picture and sound elements from which it was transferred. We endeavor to present every film in its original aspect ratio (i.e., the image’s ratio of height to width), unless the filmmaker expressly requests a slightly different framing. What that means is that the Criterion brand is your guarantee that you’re getting the complete picture as the filmmaker intended it to be seen.",
    "What are the upcoming titles? How can I suggest a title?": "We announce all our upcoming titles on our website as soon as we can make them public. Also, we announce upcoming titles in our newsletter, which we also encourage you to sign up for to get special offers and contest giveaways. Click here to visit our sign-up page for more information. If you would like to suggest a title, please write to suggestions@criterion.com. Though we are not able to personally reply to all suggestions, our acquisitions staff reads all of them and appreciates hearing from you.",
    "What is the relationship between the Criterion Collection and Janus Films?": "The companies have similar missions but focus on different markets. Criterion publishes home video releases including DVDs, Blu-ray and 4K discs. Janus Films oversees theatrical and nontheatrical showings as well as television and cable licenses. To learn more about Janus Films, please visit janusfilms.com.",
    "Whom do I contact if I have a problem with my packaging or a technical issue with my disc?": "Please send an e-mail to Jon Mulvaney at mulvaney@criterion.com. We are happy to replace any defective discs you have. We care greatly about the quality of all our products and appreciate your feedback on any issues that you may be experiencing.",
    "Why do Criterion releases often cost more than others?": "Our prices reflect all the resources we put into making each release a special one. Each has a producer, who finds the best existing supplemental features to help further the appreciation of the film and often creates original content as well. Our technical staff ensures that we are working with the best original source materials and digital masters by performing rigorous visual and audio restoration processes.",
    "Do you have a loyalty program for people who buy directly from your website?": "We appreciate the loyalty of our customers, and we do offer a loyalty points program. Here’s how it works: Every dollar you spend at the Criterion Store earns you a point. For every 500 points you earn, we will send you a $50 gift certificate. To take advantage of this, you must register for a customer account at checkout with a valid e-mail address, so we can keep track of your total and credit your account. Shipping fees, sales tax, and gift certificates do not count toward the loyalty program.",
    "Will Blu-rays play in my DVD player?": "No.",
    "What if I have a problem with something I buy?": "The Criterion Collection will refund the full purchase amount (including any applicable sales tax, but excluding any shipping and handling fees) if an item is returned within 30 days of the date we ship it to you. Shipping and handling will only be refunded if the problem is the result of our error. Large order returns are subject to a 10% restocking fee at our discretion based on your merchandise total. Disc returns/exchanges will only be accepted if the outer shrink-wrap is intact. T-shirt returns/exchanges will only be accepted if the item is unwashed and unworn. Recipients of gifts (as designated in the ship-to address of the order) may exchange items only for ones of equal or lesser value. Refunds can only be made in the original form of payment and only to the original purchaser. Please note your order number and contact us at orders@criterion.com if you have any returns, exchanges, or defective discs. We will give you instructions on mailing items back to us if necessary.",
    "What if I want to cancel an order?": "If the status on your order page reads 'Being Packed for Shipment', your order cannot be changed by you or by our customer service department. We try to ship every order as soon as possible, so we cannot cancel orders for in-stock items once received. For return instructions, please contact customer service at orders@criterion.com or see 'What if I have a problem with something I buy?' in the FAQ.",
  }

  return (
    <section className='min-h-dvh bg-light dark:bg-gray text-gray dark:text-white pb-20'>
        <div className='top-0 h-64 md:h-96 overflow-hidden bg-center bg-cover mt-24 dark:mt-0' style={{backgroundImage: `url(${faqImg})`}}>
            <div className='text-5xl text-white md:text-8xl font-text h-full w-full flex items-center justify-center bg-black/30'>
                FAQ
            </div>
        </div>

        <div className='flex items-center flex-col mt-20 px-5'>
            {Object.keys(faqQuestions).map((question, index) => (
                <FaqAccordion key={index} title={question} text={faqQuestions[question]} />
            ))}
        </div>
    </section>
  )
}

export default Faq