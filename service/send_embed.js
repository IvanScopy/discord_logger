
const send_embed = async (channel, topic, bindingKey, body, type) => {
    var cl;
    switch (type) {
        case global.LOGGER_INFO:
            cl = 0x0099ff;
            break;
        case global.LOGGER_WARNING:
            cl = 0xFFE600;
            break;
        case global.LOGGER_DANGER:
            cl = 0xFF001A;
            break;
        default:
            cl = 0x0099ff;
    }

    const embed = {
        color: cl,
        title: 'Tung',
        url: 'https://github.com/IvanScopy',
        author: {
            name: 'Bui Quang Tung',
            icon_url: 'https://avatars.githubusercontent.com/u/127161790?s=400&u=8450fdc04eb098797385afea7066c9ed47415770&v=4',
            url: 'https://github.com/IvanScopy/',
        },
        description: `Logger ${topic}`,
        thumbnail: {
            url: 'https://avatars.githubusercontent.com/u/127161790?s=400&u=8450fdc04eb098797385afea7066c9ed47415770&v=4',
        },
        fields: [
            {
                name: 'Log',
                value: body,
            },
            // {
            //     name: '\u200b',
            //     value: '\u200b',
            //     inline: false,
            // },
            // {
            //     name: 'Inline field title',
            //     value: 'Some value here',
            //     inline: true,
            // },
            // {
            //     name: 'Inline field title',
            //     value: 'Some value here',
            //     inline: true,
            // },
            // {
            //     name: 'Inline field title',
            //     value: 'Some value here',
            //     inline: true,
            // },
        ],
        // image: {
        //     url: 'https://i.imgur.com/AfFp7pu.png',
        // },
        timestamp: new Date().toISOString(),
        footer: {
            text: 'Contact to: lytranvinh.work@gmail.com',
            icon_url: 'https://avatars.githubusercontent.com/u/88392742',
            url: 'https://github.com/Youknow2509/',
        },
    };

    await channel.send({ embeds: [embed] });
}

export default send_embed;