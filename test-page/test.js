
const testSymptoms = [
    '1. Anxiety',
    '2. Nervousness',
    '3. Worrying',
    '4. Irritability',
    '5. Muscle Tension or Tightness',
    '6. Trouble Relaxing',
    '7. Trouble Falling or Staying Asleep </i>(Rate the most troublesome symptom)<i>',
    '8. Fatigue or Lack of Energy',
    '9. Problems with Concentration or Attention',
    '10. Trouble Remembering Things',
    '11. Shortness of Breath, Chest Tightness, or Pain, Pounding/Skipping/Racing Heartbeat <i>(Rate the most troublesome symptom)</i>',
    '12. Stomach Upset, Nausea, Constipation, Diarrea, or Irritable Bowels <i>(Rate the most troublesome symptom)</i>',
    '13. Dizziness, Lightheadedess, Headaches, Trembling or Shakiness <i>Rate the most troublesome symptom</i>',
    '14. Numbness, Tingling, Excessive Sweating, Flushing, or Frequent Urination <i>(Rate the most troublesome symptom)</i>',
    '15. Feeling Restless, Keyed Up, or On Edge',
    '16. Anticipating or Fearing Something Bad Might Happen',
    '17. Trouble Functioning at Home, Work, or Socially Due to Anxiety <i>(Rate the most troublesome symptom)</i>'
]

const intensityCategoryPhotos = {
    'none': 'intensity-photos/1_none.png',
    'mild': 'intensity-photos/2_mild.png',
    'moderate': 'intensity-photos/3_moderate.png',
    'severe': 'intensity-photos/4_severe.png',
    'extremeDistress': 'intensity-photos/5_extreme_distress.png',
}

const frequencyCategoryPhotos = {
    'none': 'frequency-photos/1_none.png',
    'occasionally': 'frequency-photos/2_occasionally.png',
    'often': 'frequency-photos/3_often.png',
    'usually': 'frequency-photos/4_usually.png',
    'allTheTime': 'frequency-photos/5_all_the_time.png',
}

// TODO: change all instances of selecting form to this constant

const pageForm = document.querySelector('form');

class ResultsPage {

    // TODO: add additional information for each category
    // static generateNoneResult() {
    // const noneResultPage = document.createElement('div')
    // noneResultPage.classList.add('results-card')
    // noneResultPage.classList.add('guide-card')

    // noneResultPage.innerHTML = `
    // <h1>None</h1>
    // `

    // pageForm.appendChild(noneResultPage)
    // }

    static generateLowResult() {
        const lowResultPage = document.createElement('div')
        lowResultPage.classList.add('results-card')
        lowResultPage.classList.add('guide-card')

        lowResultPage.innerHTML = `
            <h1>Mild(Low) level anxiety:</h1>
            <p>Inilalarawan bilang sub-clinical or clinically non-significant, Ito ay maaaring makaapekto sa emosyonal, panlipunan at propesyonal na paggana.</p>
            <p>Ang banayad na mga sintomas ng pagkabalisa ay maaaring magpakita bilang panlipunang pagkabalisa o pagkamahiyain at maaaring maranasan sa maagang pagkabata hanggang sa pagtanda.</p>
            <p>Kung hindi natutugunan, ang banayad na pagkabalisa ay maaaring humantong sa maladaptive coping strategies o mas malubhang kondisyon sa pag-iisip.</p>
            `

        pageForm.appendChild(lowResultPage)

        // TODO: add 'More Information' button that leads the user to a page that provides them with more information regarding their category result
    }

    static generateModerateResult() {
        const moderateResultPage = document.createElement('div')
        moderateResultPage.classList.add('results-card')
        moderateResultPage.classList.add('guide-card')

        moderateResultPage.innerHTML = `
            <h1>Moderate (Medium) level anxiety:</h1>
            <p>Ang mga taong may katamtamang antas ng pagkabalisa ay may mas madalas o patuloy na mga sintomas kaysa sa mga may banayad na pagkabalisa, ngunit mayroon pa ring mas mahusay na pang-araw-araw na paggana kaysa sa isang taong may matinding pagkabalisa o panic disorder.</p>
            <p>Halimbawa, ang mga taong may katamtamang pagkabalisa ay maaaring mag-ulat na nakakaranas ng mga sintomas tulad ng pakiramdam sa gilid, ang pagiging hindi makontrol ang kanilang pag-aalala o hindi makapagpahinga ng ilang araw o karamihan ng mga araw sa isang linggo, ngunit hindi araw-araw.</p>
            <p>Bagama’t nakakagambala ang mga sintomas ng katamtamang pagkabalisa, ang mga taong may katamtamang pagkabalisa ay maaaring magkaroon ng tagumpay sa pamamahala ng kanilang pagkabalisa sa tulong ng isang doktor o mga diskarte sa tulong sa sarili.</p>
            `

        pageForm.appendChild(moderateResultPage)
    }

    static generateExtremeResult() {
        const extremeResultPage = document.createElement('div')
        extremeResultPage.classList.add('results-card')
        extremeResultPage.classList.add('guide-card')

        extremeResultPage.innerHTML = `
            <h1>Extreme/Severe level anxiety</h1>
            <p>Ang matinding pagkabalisa ay lubhang nakakapanghina, at ang mga sintomas ng matinding pagkabalisa ay nakakatugon sa mga pangunahing pamantayan sa diagnostic para sa clinically-significant anxiety disorder.</p>
            <p>Ang mga taong may matinding pagkabalisa ay karaniwang mas mataas ang marka sa mga antas ng pagkabalisa at mas mababa sa paggana.</p>
            <p>Ang mga malubhang sintomas ng pagkabalisa ay madalas ding nangyayari kasama ng malaking depresyon, na maaaring mag-ambag sa higit na kapansanan.</p>
            <p>Ang mga sintomas ng matinding pagkabalisa ay madalas at paulit-ulit at maaaring kabilang ang pagtaas ng tibok ng puso, pakiramdam ng pagkasindak at pag-alis sa lipunan.</p>
            <p>Ang mga sintomas na ito ay maaaring magresulta sa pagkawala ng trabaho at pagtaas ng mga gastos sa pangangalagang pangkalusugan.</p>
            <p>Bilang karagdagan, ang mga indibidwal na may matinding pagkabalisa ay maaaring bumaling sa alkohol at droga bilang isang paraan upang makayanan ang kanilang mga sintomas.</p>
            `

        pageForm.appendChild(extremeResultPage)
    }

    static generateResources() {

        const guidesList = document.createElement('div')
        guidesList.classList.add('results-card')
        guidesList.classList.add('guide-card')
        guidesList.innerHTML = `
            <h2>Ways to improve your mental health</h2>
            <h2>Prioritizing self care</h2>
            <img src="../images/self-care.png" class="guide-photo">
    
            <h2>Seek social support</h2>
            <img src="../images/social-support.png" class="guide-photo">
         
            <h2>Manage stress</h2>
            <img src="../images/manage-stress.png" class="guide-photo">
          
            <h2>Set realistic goals</h2>
            <img src="../images/realistic-goals.png" class="guide-photo">
           
            <h2 >Seek professional help</h2>
            <img src="../images/professional-help.png" class="guide-photo">
    `;

        pageForm.appendChild(guidesList)

        const resourcesTitleCard = document.createElement('div')
        resourcesTitleCard.classList.add('results-card')
        resourcesTitleCard.classList.add('guide-card')
        resourcesTitleCard.innerHTML = `
            <h2>Hotlines and Websites for Anxiety</h2>
        `

        pageForm.appendChild(resourcesTitleCard)

        const uddPsychologyCard = document.createElement('div')
        uddPsychologyCard.classList.add('results-card')
        uddPsychologyCard.classList.add('guide-card')
        uddPsychologyCard.innerHTML += `
            <h2>UNIVERSIDAD DE DAGUPAN – PSYCHOLOGY SOCIETY</h2>
            <img src="resources-logos/udd-psych-logo.png" class="logo-img">
            <p>Email: spsychology@cdd.edu.ph</p>
            <p>Facebook Page: <a href="https://www.facebook.com/UdDPsychSoc">UdD - Psychological Society</p>    
            `

        pageForm.appendChild(uddPsychologyCard)

        const lnuPsychologyCard = document.createElement('div')
        lnuPsychologyCard.classList.add('results-card')
        lnuPsychologyCard.classList.add('guide-card')
        lnuPsychologyCard.innerHTML += `
            <h2>L-NU PSYCHOLOGY DEPARTMENT</h2>
            <img src="resources-logos/lyceum-northwestern-university-logo.png" class="logo-img">
            <p>Contact number: (0075) 515-8128</p>
            <p>Facebook Page: <a href="https://www.facebook.com/LNUPsychologySC">Psychology Student Council</p>    
            `

        pageForm.appendChild(lnuPsychologyCard)

        const uddGuidanceCard = document.createElement('div')
        uddGuidanceCard.classList.add('results-card')
        uddGuidanceCard.classList.add('guide-card')
        uddGuidanceCard.innerHTML += `
            <h2>UDD GUIDANCE (Guidance Center)</h2>
            <img src="resources-logos/udd-guidance-logo.png" class="logo-img">
            <p>Email: guidance@cdd.edu.ph</p>
            <p>Facebook Page: <a href="https://www.facebook.com/guida.cen?mibextid=LQQJ4d">UdD Guidance</p>    
            `

        pageForm.appendChild(uddGuidanceCard)

        const dohCard = document.createElement('div')
        dohCard.classList.add('results-card')
        dohCard.classList.add('guide-card')
        dohCard.innerHTML += `
            <h2>DEPARTMENT OF HEALTH (DOH)</h2>
            <img src="resources-logos/doh-logo.png" class="logo-img">
            <p>Number: 02 6517 800</p>
            <p>Email: callcenter@doh.gov.ph</p>
            <p>Facebook Page: <a href="https://www.facebook.com/DOHgovPH?mibextid=ZbWKwL">Department of Health (DOH)</a></p>   
            <p>Government Page: <a href="https://doh.gov.ph">Department of Health (DOH)</a></p>   
            `

        pageForm.appendChild(dohCard)

        const hamticCard = document.createElement('div')
        hamticCard.classList.add('results-card')
        hamticCard.classList.add('guide-card')
        hamticCard.innerHTML += `
            <h2>OFFICE OF THE MUNICIPAL SOCIAL WELFARE AND DEVELOPMENT OFFICER</h2>
            <img src="resources-logos/mswd-logo.png" class="logo-img">
            <p>Contact number: 09552945243/p>
            <p>Email: hamticmswdo@gmail.com</p>
            <p>Facebook Page: <a href="https://www.facebook.com/mswd.lingayen">MSWD Lingayen</a></p>   
            <p>Government Page: <a href="https://hamtic.gov.ph/office-of-the-social-welfare-and-development-officer/">Office of the Municipal Social Welfare and Development Officer</a></p>   
            `

        pageForm.appendChild(hamticCard)

        const pmhaCard = document.createElement('div')
        pmhaCard.classList.add('results-card')
        pmhaCard.classList.add('guide-card')
        pmhaCard.innerHTML += `
            <h2>PHILIPPINE MENTAL HEALTH ASSOCIATION DAGUPAN-PANGASINAN CHAPTER</h2>
            <img src="resources-logos/pmha-logo.png" class="logo-img">
            <p>Contact number: (075) 523 5467</p>
            <p>Email: pmha_mentalhealth@yahoo.com</p>
            <p>Facebook Page: <a href="https://www.pmhadagupan.page.tl/">Philippine Mental Health Association - Pangasinan Chapter</a></p>   
            `

        pageForm.appendChild(pmhaCard)

        const dswdCard = document.createElement('div')
        dswdCard.classList.add('results-card')
        dswdCard.classList.add('guide-card')
        dswdCard.innerHTML += `
            <h2>DEPARTMENT OF SOCIAL WELFARE AND DEVELOPMENT FIELD OFFICE 1</h2>
            <img src="resources-logos/dwsd-office-logo.jpg" class="logo-img">
            <p>Telefax number: (072) 888-2184</p>
            <p>Contact number: +63 945-823-7218 or +63 961-548-8850</p>
            <p>Email: sapfo1.helpdesk@gmail.com</p>
            <p>Facebook Page: <a href="https://www.facebook.com/dswdfo1?mibextid=9R9pXO">DSWD Field Office 1</a></p>   
            <p>Government Page: <a href="https://fo1.dswd.gov.ph/">DWSD Field Office 1</a></p>   
            `

        pageForm.appendChild(dswdCard)

        const dtrcDagupanCard = document.createElement('div')
        dtrcDagupanCard.classList.add('results-card')
        dtrcDagupanCard.classList.add('guide-card')
        dtrcDagupanCard.innerHTML += `
            <h2>DOH DRUG TREATMENT AND REHABILITATION CENTER DAGUPAN</h2>
            <img src="resources-logos/dtrc-dagupan-logo.jpg" class="logo-img">
            <p>Contact number: (075) 653 9876</p>
            <p>Email: coh@dtrcdagupan.doh.gov.ph</p>
            <p>Facebook Page: <a href="https://www.facebook.com/dohdtrcdagupan?mibextid=rS40aB7S9Ucbxw6v">DTRC Dagupan</a></p>   
            <p>Government Page: <a href="https://dtrcdagupan.doh.gov.ph/">DTRC Dagupan</a></p>   
            `

        pageForm.appendChild(dtrcDagupanCard)


        const professionalsList = document.createElement('div');
        professionalsList.classList.add('results-card')
        professionalsList.innerHTML = `
        <h4>Here are some places where you could find mental health professionals within Dagupan City</h4>
        <ul class="resources-list">
            <li><a href="#">Philippine Mental Health Association</a></li>
            <li><a href="#">Psychiatry & Mental Health Clinic</a></li>
            <li><a href="#">Wundt Psychological Institute</a></li>
            <li><a href="#">The Medical City Clinic @ SM Dagupan</a></li>
        </ul>
    `;

        // !Commented out to make current demo look cleaner
        // pageForm.appendChild(professionalsList)
    }

}

class Form {

    static generateTable() {
        const tableBody = document.querySelector('#table-body');
        let tableBodyContent = '';

        for (let i = 0; i < testSymptoms.length; i++) {
            tableBodyContent += `  
        <tr>
            <td>${testSymptoms[i]}</td>            
            <td>
                <select id="intensity-select-${i + 1}" class="intensity-select">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            <td>
                <select id="frequency-select-${i + 1}" class="frequency-select">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </td>
        </tr>
        `
        }

        tableBody.innerHTML += tableBodyContent;
    }

    static evaluateForm(e) {
        e.preventDefault();

        let intensityValues = 0;
        let frequencyValues = 0;

        for (let i = 1; i <= testSymptoms.length; i++) {
            const eachFreq = document.querySelector(`#intensity-select-${i}`).value;
            const eachIntensity = document.querySelector(`#frequency-select-${i}`).value;

            intensityValues += Number(eachFreq);
            frequencyValues += Number(eachIntensity);
        }

        // DONE: after adding the values, place them within a range
        const intensityAverage = intensityValues / testSymptoms.length
        const frequencyAverage = frequencyValues / testSymptoms.length

        let intensityCategory = ''
        let frequencyCategory = ''

        let intensityPhoto = ''
        let frequencyPhoto = ''

        // TODO: Test if photos for intensity and frequency are working properly
        if (intensityAverage == 0.0) {
            intensityCategory = 'None'
            intensityPhoto = intensityCategoryPhotos.none
        } else if (intensityAverage > 0.0 && intensityAverage < 4.0) {
            intensityCategory = 'Mild'
            intensityPhoto = intensityCategoryPhotos.mild
        } else if (intensityAverage >= 4.0 && intensityAverage < 7.0) {
            intensityCategory = 'Moderate'
            intensityPhoto = intensityCategoryPhotos.moderate
        } else if (intensityAverage >= 7.0 && intensityAverage < 10.0) {
            intensityCategory = 'Severe'
            intensityPhoto = intensityCategoryPhotos.severe
        } else if (intensityAverage == 10.0) {
            intensityCategory = 'Extreme distress'
            intensityPhoto = intensityCategoryPhotos.extremeDistress
        }

        // DONE: change frequency to have its own photos
        if (frequencyAverage == 0.0) {
            frequencyCategory = 'None'
            frequencyPhoto = frequencyCategoryPhotos.none
        } else if (frequencyAverage > 0.0 && frequencyAverage < 4.0) {
            frequencyCategory = 'Occasionally'
            frequencyPhoto = frequencyCategoryPhotos.occasionally
        } else if (frequencyAverage >= 4.0 && frequencyAverage < 7.0) {
            frequencyCategory = 'Often'
            frequencyPhoto = frequencyCategoryPhotos.often
        } else if (frequencyAverage >= 7.0 && frequencyAverage < 10.0) {
            frequencyCategory = 'Usually'
            frequencyPhoto = frequencyCategoryPhotos.usually
        } else if (frequencyAverage == 10.0) {
            frequencyCategory = 'All the time'
            frequencyPhoto = frequencyCategoryPhotos.allTheTime
        }

        // Removing unnecessary elements after evaluating form
        document.querySelector('.test-title').innerHTML = ''
        document.querySelector('.scale-card').remove()
        document.querySelector('.question-card').remove()
        document.querySelector('#submit-button').remove()

        Form.generateResults(intensityCategory, frequencyCategory, intensityPhoto, frequencyPhoto)

    }

    static generateResults(intensityCategory, frequencyCategory, intensityPhoto, frequencyPhoto) {

        // Make the user go to the start of the webpage
        window.scrollTo(0, 0)

        document.querySelector('.test-title').innerHTML = 'Anxiety Symptoms Results'

        const intensityResultsContainer = document.createElement('div')
        intensityResultsContainer.classList.add('results-card')
        intensityResultsContainer.id = 'intensity-result'

        document.querySelector('form').appendChild(intensityResultsContainer)

        const frequencyResultsContainer = document.createElement('div')
        frequencyResultsContainer.classList.add('results-card')
        frequencyResultsContainer.id = 'frequency-result'

        document.querySelector('form').appendChild(intensityResultsContainer)
        document.querySelector('form').appendChild(frequencyResultsContainer)

        document.querySelector('#intensity-result').innerHTML = `
        <h2>Anxiety Intensity: ${intensityCategory}</h2>
        <img src="${intensityPhoto}"></img>
        `

        document.querySelector('#frequency-result').innerHTML = `
        <h2>Anxiety Frequency: ${frequencyCategory}</h2>
        <img src="${frequencyPhoto}"></img>
    `

        // Show the appropriate information regarding each category
        // if (intensityCategory == 'None') {
        // ResultsPage.generateNoneResult()
        // } 
        if (intensityCategory == 'Mild') {
            ResultsPage.generateLowResult()
        } else if (intensityCategory == 'Moderate') {
            ResultsPage.generateModerateResult()
        } else if (intensityCategory == 'Severe' || intensityCategory == 'Extreme distress') {
            ResultsPage.generateExtremeResult()
        }

        ResultsPage.generateResources()

        const retakeButton = document.createElement('input')
        retakeButton.type = 'button'
        retakeButton.id = 'retake-button'
        retakeButton.value = 'Retake Questionnaire'
        retakeButton.addEventListener('click', () => {
            location.reload() // refreshes the results of the page
            window.scrollTo(0, 0) // makes user go to the start of the page
        })

        document.querySelector('form').appendChild(retakeButton)

    }
}


document.querySelector('#submit-button').addEventListener('click', Form.evaluateForm);
window.onload = Form.generateTable;