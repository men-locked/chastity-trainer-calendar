import "react-big-calendar/lib/css/react-big-calendar.css";
import "./custom.css";
import { Calendar as RBC, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/zh-tw";
import { zhtw } from "./locale/zh-tw";

const localizer = momentLocalizer(moment);

export default function Calendar(props) {
    const titleAccessor = event => {
        let ret = '';

        ret += event.locked  === 'status-locked'
            ? '🔒 鎖著 Locked'
            : '🔓 沒鎖 Unlocked';

        ret += event.cummed === 'cummed-yes'
            ? '\n🥛 有射 Cum'
            : '\n😣 沒射 No Cum';

        if (event.orgasm_type) {
            switch (event.orgasm_type) {
                case 'orgasm-full':
                    ret += '\n💦 完整高潮 Full';
                    break;
                case 'orgasm-ruined':
                    ret += '\n💧 破壞性高潮 Ruined';
                    break;
                case 'orgasm-wetdream':
                    ret += '\n💭 夢遺 Wet Dream';
                    break;
                case 'orgasm-other':
                    ret += '\n🤔 其它方式 Other';
                    break;
            }
        }

        return ret;
    };

    return <RBC
        localizer={localizer}
        style={{height: '100vh'}}
        views={["month"]}
        messages={zhtw}
        events={props.events}
        titleAccessor={titleAccessor}
    />
}