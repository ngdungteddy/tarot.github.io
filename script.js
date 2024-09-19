const tarotCards = [
    {
        name: "Kẻ Khờ",
        image: "https://www.sacred-texts.com/tarot/pkt/img/ar00.jpg",
        meaning: "Kẻ Khờ tượng trưng cho sự khởi đầu mới, tinh thần tự do, và sự ngây thơ.",
        love: "Trong tình yêu, Kẻ Khờ gợi ý về một mối quan hệ mới hoặc một khởi đầu mới trong mối quan hệ hiện tại. Hãy mở lòng và đón nhận những trải nghiệm mới.",
        career: "Về sự nghiệp, lá bài này khuyến khích bạn thử nghiệm những ý tưởng mới, không sợ thất bại. Đây có thể là thời điểm tốt để bắt đầu một dự án mới hoặc thậm chí là chuyển hướng sự nghiệp.",
        spirituality: "Về mặt tâm linh, Kẻ Khờ nhắc nhở bạn giữ tâm trí cởi mở, sẵn sàng học hỏi và trải nghiệm. Hãy tin tưởng vào hành trình tâm linh của bạn."
    },
    {
        name: "Nhà Ảo Thuật",
        image: "https://www.sacred-texts.com/tarot/pkt/img/ar01.jpg",
        meaning: "Nhà Ảo Thuật đại diện cho sự sáng tạo, kỹ năng, và khả năng biến ý tưởng thành hiện thực.",
        love: "Trong tình yêu, Nhà Ảo Thuật gợi ý về sự quyến rũ và thu hút. Bạn có khả năng tạo ra ma thuật trong mối quan hệ của mình.",
        career: "Về sự nghiệp, lá bài này cho thấy bạn có tất cả các công cụ cần thiết để thành công. Hãy tận dụng tài năng và nguồn lực của bạn để đạt được mục tiêu.",
        spirituality: "Về mặt tâm linh, Nhà Ảo Thuật khuyến khích bạn kết nối với năng lượng vũ trụ và sử dụng nó để thực hiện ý định của mình."
    },
    {
        name: "Nữ Tư Tế",
        image: "https://www.sacred-texts.com/tarot/pkt/img/ar02.jpg",
        meaning: "Nữ Tư Tế tượng trưng cho trực giác, sự hiểu biết sâu sắc và bí ẩn.",
        love: "Trong tình yêu, Nữ Tư Tế khuyên bạn nên lắng nghe trực giác của mình. Có thể có những điều chưa được tiết lộ trong mối quan hệ của bạn.",
        career: "Về sự nghiệp, lá bài này gợi ý rằng bạn nên tin tưởng vào kiến thức và kỹ năng của mình. Đây có thể là thời điểm tốt để học hỏi thêm hoặc nghiên cứu sâu hơn về lĩnh vực của bạn.",
        spirituality: "Về mặt tâm linh, Nữ Tư Tế khuyến khích bạn đào sâu vào nội tâm, lắng nghe tiếng nói bên trong và khám phá những bí ẩn tâm linh."
    },
    {
        name: "Nữ Hoàng",
        image: "https://www.sacred-texts.com/tarot/pkt/img/ar03.jpg",
        meaning: "Nữ Hoàng đại diện cho sự phong phú, sáng tạo và nuôi dưỡng.",
        love: "Trong tình yêu, Nữ Hoàng gợi ý về sự chăm sóc và nuôi dưỡng. Hãy thể hiện tình yêu thương và sự quan tâm đến đối phương.",
        career: "Về sự nghiệp, lá bài này khuyến khích bạn phát triển các kỹ năng sáng tạo và nuôi dưỡng môi trường làm việc tích cực.",
        spirituality: "Về mặt tâm linh, Nữ Hoàng nhắc nhở bạn kết nối với năng lượng của Mẹ Thiên Nhiên và nuôi dưỡng tâm hồn mình."
    },
    {
        name: "Hoàng Đế",
        image: "https://www.sacred-texts.com/tarot/pkt/img/ar04.jpg",
        meaning: "Hoàng Đế tượng trưng cho quyền lực, uy quyền và cấu trúc.",
        love: "Trong tình yêu, Hoàng Đế gợi ý về sự ổn định và cam kết. Đây có thể là thời điểm để xây dựng nền tảng vững chắc cho mối quan hệ.",
        career: "Về sự nghiệp, lá bài này khuyến khích bạn đảm nhận vai trò lãnh đạo và thiết lập cấu trúc rõ ràng trong công việc.",
        spirituality: "Về mặt tâm linh, Hoàng Đế nhắc nhở bạn tạo ra kỷ luật và cấu trúc trong thực hành tâm linh của mình."
    },
    {
        name: "Giáo Hoàng",
        image: "https://www.sacred-texts.com/tarot/pkt/img/ar05.jpg",
        meaning: "Giáo Hoàng đại diện cho truyền thống, tâm linh và giáo dục.",
        love: "Trong tình yêu, Giáo Hoàng gợi ý về sự cam kết và các giá trị truyền thống. Hãy xem xét các niềm tin và giá trị chung trong mối quan hệ.",
        career: "Về sự nghiệp, lá bài này khuyến khích bạn tìm kiếm sự hướng dẫn từ người có kinh nghiệm hoặc theo đuổi giáo dục cao hơn.",
        spirituality: "Về mặt tâm linh, Giáo Hoàng nhắc nhở bạn kết nối với truyền thống tâm linh và tìm kiếm sự hướng dẫn từ các bậc thầy."
    },
    {
        name: "Người Yêu",
        image: "https://www.sacred-texts.com/tarot/pkt/img/ar06.jpg",
        meaning: "Người Yêu tượng trưng cho tình yêu, sự hòa hợp và lựa chọn.",
        love: "Trong tình yêu, Người Yêu gợi ý về sự kết nối sâu sắc và lựa chọn quan trọng. Đây có thể là thời điểm để cam kết hoặc đưa ra quyết định quan trọng trong mối quan hệ.",
        career: "Về sự nghiệp, lá bài này khuyến khích bạn tìm kiếm sự cân bằng và hợp tác. Hãy xem xét các đối tác tiềm năng hoặc cơ hội hợp tác.",
        spirituality: "Về mặt tâm linh, Người Yêu nhắc nhở bạn tìm kiếm sự hài hòa giữa các khía cạnh khác nhau của bản thân và kết nối với nguồn năng lượng tình yêu vũ trụ."
    },
    {
        name: "Cỗ Xe",
        image: "https://www.sacred-texts.com/tarot/pkt/img/ar07.jpg",
        meaning: "Cỗ Xe tượng trưng cho ý chí, quyết tâm và chiến thắng.",
        love: "Trong tình yêu, Cỗ Xe gợi ý về sự tiến triển và vượt qua thử thách. Hãy duy trì sự tập trung và quyết tâm trong mối quan hệ của bạn.",
        career: "Về sự nghiệp, lá bài này khuyến khích bạn theo đuổi mục tiêu với sự quyết tâm và tự tin. Thành công đang ở phía trước nếu bạn duy trì động lực.",
        spirituality: "Về mặt tâm linh, Cỗ Xe nhắc nhở bạn duy trì sự cân bằng giữa các khía cạnh khác nhau của cuộc sống trong hành trình tâm linh của mình."
    },
    {
        name: "Sức Mạnh",
        image: "https://www.sacred-texts.com/tarot/pkt/img/ar08.jpg",
        meaning: "Sức Mạnh tượng trưng cho lòng can đảm, kiên nhẫn và sức mạnh nội tâm.",
        love: "Trong tình yêu, Sức Mạnh gợi ý về sự kiên nhẫn và lòng trắc ẩn. Hãy đối mặt với thử thách trong mối quan hệ bằng sự dịu dàng và kiên định.",
        career: "Về sự nghiệp, lá bài này khuyến khích bạn đối mặt với thách thức bằng sự tự tin và kiên trì. Hãy tin vào khả năng của bản thân để vượt qua mọi trở ngại.",
        spirituality: "Về mặt tâm linh, Sức Mạnh nhắc nhở bạn rằng sức mạnh thực sự đến từ bên trong. Hãy nuôi dưỡng sức mạnh nội tâm của mình thông qua thực hành tâm linh."
    },
    {
        name: "Ẩn Sĩ",
        image: "https://www.sacred-texts.com/tarot/pkt/img/ar09.jpg",
        meaning: "Ẩn Sĩ tượng trưng cho sự nội tâm, tìm kiếm và hướng dẫn tinh thần.",
        love: "Trong tình yêu, Ẩn Sĩ gợi ý về việc cần thời gian để suy ngẫm và tự hiểu mình. Đây có thể là thời điểm để tìm hiểu sâu hơn về nhu cầu và mong muốn của bạn trong mối quan hệ.",
        career: "Về sự nghiệp, lá bài này khuyến khích bạn tìm kiếm sự hướng dẫn từ bên trong hoặc từ một người cố vấn đáng tin cậy. Hãy dành thời gian để suy ngẫm về con đường sự nghiệp của mình.",
        spirituality: "Về mặt tâm linh, Ẩn Sĩ nhắc nhở bạn rằng câu trả lời bạn tìm kiếm nằm bên trong chính mình. Hãy dành thời gian cho việc thiền định và nội tâm."
    },
    {
        name: "Bánh Xe Quay",
        image: "https://www.sacred-texts.com/tarot/pkt/img/ar10.jpg",
        meaning: "Bánh Xe Quay tượng trưng cho vận mệnh, chu kỳ và thay đổi.",
        love: "Trong tình yêu, Bánh Xe Quay gợi ý về sự thay đổi và cơ hội mới. Hãy sẵn sàng đón nhận những biến đổi trong mối quan hệ của bạn.",
        career: "Về sự nghiệp, lá bài này cho thấy có thể có những thay đổi bất ngờ hoặc cơ hội mới. Hãy linh hoạt và sẵn sàng nắm bắt cơ hội khi nó đến.",
        spirituality: "Về mặt tâm linh, Bánh Xe Quay nhắc nhở bạn rằng mọi thứ đều có chu kỳ. Hãy chấp nhận những thay đổi như một phần của hành trình tâm linh."
    },
    {
        name: "Công Lý",
        image: "https://www.sacred-texts.com/tarot/pkt/img/ar11.jpg",
        meaning: "Công Lý tượng trưng cho sự cân bằng, công bằng và quyết định.",
        love: "Trong tình yêu, Công Lý gợi ý về sự cân bằng và công bằng trong mối quan hệ. Hãy đảm bảo rằng cả hai bên đều được lắng nghe và tôn trọng.",
        career: "Về sự nghiệp, lá bài này khuyến khích bạn đưa ra quyết định dựa trên logic và công bằng. Đây có thể là thời điểm để giải quyết các vấn đề pháp lý hoặc hợp đồng.",
        spirituality: "Về mặt tâm linh, Công Lý nhắc nhở bạn về luật nhân quả. Hãy sống một cách chính trực và cân bằng trong mọi khía cạnh của cuộc sống."
    },
    {
        name: "Người Treo Cổ",
        image: "https://www.sacred-texts.com/tarot/pkt/img/ar12.jpg",
        meaning: "Người Treo Cổ tượng trưng cho sự hy sinh, buông bỏ và quan điểm mới.",
        love: "Trong tình yêu, Người Treo Cổ gợi ý về việc cần nhìn nhận mối quan hệ từ một góc độ khác. Đôi khi, việc buông bỏ một số thứ có thể mang lại lợi ích lâu dài.",
        career: "Về sự nghiệp, lá bài này khuyến khích bạn xem xét tình hình từ một góc nhìn mới. Có thể bạn cần tạm dừng để suy ngẫm trước khi tiến về phía trước.",
        spirituality: "Về mặt tâm linh, Người Treo Cổ nhắc nhở bạn rằng đôi khi ta cần buông bỏ để đạt được sự giác ngộ. Hãy mở lòng đón nhận những quan điểm mới."
    },
    {
        name: "Thần Chết",
        image: "https://www.sacred-texts.com/tarot/pkt/img/ar13.jpg",
        meaning: "Thần Chết tượng trưng cho sự kết thúc, chuyển đổi và tái sinh.",
        love: "Trong tình yêu, Thần Chết gợi ý về sự kết thúc của một giai đoạn và bắt đầu của giai đoạn mới. Đây có thể là thời điểm để thay đổi hoặc chuyển đổi trong mối quan hệ.",
        career: "Về sự nghiệp, lá bài này cho thấy có thể có những thay đổi lớn hoặc kết thúc một giai đoạn. Hãy sẵn sàng cho những cơ hội mới và sự chuyển đổi trong công việc.",
        spirituality: "Về mặt tâm linh, Thần Chết nhắc nhở bạn rằng sự thay đổi là cần thiết cho sự phát triển. Hãy chấp nhận những kết thúc như một phần của quá trình tái sinh tâm linh."
    },
    {
        name: "Tiết Độ",
        image: "https://www.sacred-texts.com/tarot/pkt/img/ar14.jpg",
        meaning: "Tiết Độ tượng trưng cho sự cân bằng, hòa hợp và kiên nhẫn.",
        love: "Trong tình yêu, Tiết Độ gợi ý về sự cần thiết của việc cân bằng và kiên nhẫn. Hãy tìm cách hòa hợp các nhu cầu và mong muốn của cả hai bên.",
        career: "Về sự nghiệp, lá bài này khuyến khích bạn duy trì sự cân bằng và kiên nhẫn. Hãy tìm cách kết hợp các yếu tố khác nhau để đạt được kết quả tốt nhất.",
        spirituality: "Về mặt tâm linh, Tiết Độ nhắc nhở bạn về tầm quan trọng của sự cân bằng trong cuộc sống. Hãy tìm cách hòa hợp các khía cạnh vật chất và tinh thần."
    },
    {
        name: "Ác Quỷ",
        image: "https://www.sacred-texts.com/tarot/pkt/img/ar15.jpg",
        meaning: "Ác Quỷ tượng trưng cho cám dỗ, ràng buộc và bóng tối nội tâm.",
        love: "Trong tình yêu, Ác Quỷ gợi ý về sự cám dỗ hoặc ràng buộc không lành mạnh. Hãy xem xét liệu có những khía cạnh tiêu cực trong mối quan hệ cần được giải quyết.",
        career: "Về sự nghiệp, lá bài này cảnh báo về những cám dỗ hoặc tình huống có thể ràng buộc bạn. Hãy cẩn thận với các thỏa thuận hoặc cam kết dài hạn.",
        spirituality: "Về mặt tâm linh, Ác Quỷ nhắc nhở bạn đối mặt với bóng tối nội tâm của mình. Hãy nhận biết và giải phóng những niềm tin hoặc thói quen tiêu cực."
    },
    {
        name: "Tháp",
        image: "https://www.sacred-texts.com/tarot/pkt/img/ar16.jpg",
        meaning: "Tháp tượng trưng cho sự phá hủy đột ngột, khủng hoảng và giải phóng.",
        love: "Trong tình yêu, Tháp gợi ý về những thay đổi đột ngột hoặc khủng hoảng. Tuy nhiên, điều này có thể dẫn đến sự giải phóng và cơ hội để xây dựng lại mối quan hệ trên nền tảng vững chắc hơn.",
        career: "Về sự nghiệp, lá bài này cho thấy có thể có những biến động hoặc thay đổi bất ngờ. Hãy sẵn sàng đối mặt với thách thức và xem đây như cơ hội để tái cấu trúc và phát triển.",
        spirituality: "Về mặt tâm linh, Tháp nhắc nhở bạn rằng đôi khi cần phải phá bỏ những cấu trúc cũ để tạo ra không gian cho sự phát triển mới. Hãy chấp nhận những thay đổi đột ngột như một phần của quá trình phát triển tâm linh."
    },
    {
        name: "Ngôi Sao",
        image: "https://www.sacred-texts.com/tarot/pkt/img/ar17.jpg",
        meaning: "Ngôi Sao tượng trưng cho hy vọng, cảm hứng và sự đổi mới.",
        love: "Trong tình yêu, Ngôi Sao mang đến hy vọng và niềm tin vào tương lai. Đây là thời điểm để chữa lành và tái tạo trong mối quan hệ của bạn.",
        career: "Về sự nghiệp, lá bài này gợi ý về sự lạc quan và cảm hứng mới. Hãy tin tưởng vào khả năng của bạn và theo đuổi ước mơ của mình.",
        spirituality: "Về mặt tâm linh, Ngôi Sao nhắc nhở bạn kết nối với nguồn năng lượng vũ trụ và tin tưởng vào hành trình tâm linh của mình. Đây là thời điểm để chữa lành và tái tạo năng lượng."
    },
    {
        name: "Mặt Trăng",
        image: "https://www.sacred-texts.com/tarot/pkt/img/ar18.jpg",
        meaning: "Mặt Trăng tượng trưng cho ảo tưởng, sợ hãi và tiềm thức.",
        love: "Trong tình yêu, Mặt Trăng gợi ý về sự không chắc chắn hoặc ảo tưởng. Hãy cẩn thận với những hiểu lầm và cố gắng nhìn nhận mọi thứ một cách rõ ràng hơn.",
        career: "Về sự nghiệp, lá bài này cảnh báo về những tình huống không rõ ràng hoặc lừa dối. Hãy tin tưởng vào trực giác của bạn và tìm kiếm sự rõ ràng trong các quyết định.",
        spirituality: "Về mặt tâm linh, Mặt Trăng nhắc nhở bạn khám phá tiềm thức và đối mặt với nỗi sợ hãi của mình. Đây là thời điểm để làm việc với giấc mơ và trực giác."
    },
    {
        name: "Mặt Trời",
        image: "https://www.sacred-texts.com/tarot/pkt/img/ar19.jpg",
        meaning: "Mặt Trời tượng trưng cho niềm vui, thành công và sự sáng tỏ.",
        love: "Trong tình yêu, Mặt Trời mang đến niềm vui và sự hài lòng. Đây là thời điểm để tận hưởng mối quan hệ của bạn và chia sẻ những khoảnh khắc hạnh phúc.",
        career: "Về sự nghiệp, lá bài này gợi ý về sự thành công và công nhận. Hãy tự tin thể hiện tài năng của bạn và tận hưởng thành quả lao động.",
        spirituality: "Về mặt tâm linh, Mặt Trời nhắc nhở bạn tỏa sáng từ bên trong. Hãy kết nối với nguồn năng lượng tích cực và lan tỏa nó đến những người xung quanh."
    },
    {
        name: "Phán Xét",
        image: "https://www.sacred-texts.com/tarot/pkt/img/ar20.jpg",
        meaning: "Phán Xét tượng trưng cho sự tái sinh, thức tỉnh và gọi mời.",
        love: "Trong tình yêu, Phán Xét gợi ý về sự thức tỉnh hoặc nhận thức mới về mối quan hệ. Đây có thể là thời điểm để tha thứ, hòa giải hoặc bắt đầu lại.",
        career: "Về sự nghiệp, lá bài này cho thấy có thể có sự đánh giá lại hoặc cơ hội mới. Hãy sẵn sàng cho những thay đổi lớn và cơ hội phát triển.",
        spirituality: "Về mặt tâm linh, Phán Xét nhắc nhở bạn lắng nghe tiếng gọi nội tâm. Đây là thời điểm để thức tỉnh tâm linh và đáp ứng mục đích cao hơn của bạn."
    },
    {
        name: "Thế Giới",
        image: "https://www.sacred-texts.com/tarot/pkt/img/ar21.jpg",
        meaning: "Thế Giới tượng trưng cho sự hoàn thành, thành tựu và tích hợp.",
        love: "Trong tình yêu, Thế Giới gợi ý về sự viên mãn và hoàn thiện. Đây có thể là dấu hiệu của một mối quan hệ đã đạt đến trạng thái cân bằng và hài hòa.",
        career: "Về sự nghiệp, lá bài này cho thấy sự hoàn thành một giai đoạn quan trọng. Hãy tận hưởng thành công của bạn và chuẩn bị cho những thách thức mới.",
        spirituality: "Về mặt tâm linh, Thế Giới nhắc nhở bạn về sự kết nối với vũ trụ. Đây là thời điểm để tích hợp tất cả các bài học tâm linh và cảm nhận sự trọn vẹn trong hành trình của mình."
    }
];

function drawCard() {
    const randomIndex = Math.floor(Math.random() * tarotCards.length);
    const card = tarotCards[randomIndex];
    document.getElementById("result").innerHTML = `Bạn đã rút được lá bài: ${card.name}`;
    document.getElementById("meaning").innerHTML = `
        <h3>Ý nghĩa:</h3>
        <p>${card.meaning}</p>
        <h4>Tình cảm:</h4>
        <p>${card.love}</p>
        <h4>Sự nghiệp:</h4>
        <p>${card.career}</p>
        <h4>Tâm linh:</h4>
        <p>${card.spirituality}</p>
    `;
    
    const cardImage = document.getElementById("card-image");
    const loading = document.getElementById("loading");
    const deck = document.querySelector('.deck');
    
    loading.style.display = "block";
    cardImage.style.display = "none";
    deck.style.pointerEvents = "none";
    
    cardImage.onload = function() {
        cardImage.style.display = "block";
        loading.style.display = "none";
        cardImage.classList.add('drawn');
        setTimeout(() => {
            deck.style.pointerEvents = "auto";
        }, 600);
    };
    cardImage.onerror = function() {
        loading.innerHTML = "Không thể tải hình ảnh. Vui lòng thử lại.";
        deck.style.pointerEvents = "auto";
    };
    cardImage.src = card.image;
}

// Preload tất cả hình ảnh khi trang web được tải
window.onload = function() {
    tarotCards.forEach(card => {
        const img = new Image();
        img.src = card.image;
    });
}