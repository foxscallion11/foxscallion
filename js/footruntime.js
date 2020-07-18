<script language=javascript>
    function siteTime() {
        window.setTimeout("siteTime()", 1000);
        var seconds = 1000;
        var minutes = seconds * 60;
        var hours = minutes * 60;
        var days = hours * 24;
        var years = days * 365;
        var today = new Date();
        var todayYear = today.getFullYear();
        var todayMonth = today.getMonth() + 1;
        var todayDate = today.getDate();
        var todayHour = today.getHours();
        var todayMinute = today.getMinutes();
        var todaySecond = today.getSeconds();
        /* Date.UTC() -- ����date����������׼ʱ��(UTC)1970��1��1����ҹ֮��ĺ�����(ʱ���)
        year - ��Ϊdate�������ݣ�Ϊ4λ���ֵ
        month - 0-11֮�����������Ϊdate������·�
        day - 1-31֮�����������Ϊdate���������
        hours - 0(��ҹ24��)-23֮�����������Ϊdate�����Сʱ��
        minutes - 0-59֮�����������Ϊdate����ķ�����
        seconds - 0-59֮�����������Ϊdate���������
        microseconds - 0-999֮�����������Ϊdate����ĺ����� */
        var t1 = Date.UTC(2017, 09, 11, 00, 00, 00); //����ʱ��2018-2-13 00:00:00
        var t2 = Date.UTC(todayYear, todayMonth, todayDate, todayHour, todayMinute, todaySecond);
        var diff = t2 - t1;
        var diffYears = Math.floor(diff / years);
        var diffDays = Math.floor((diff / days) - diffYears * 365);
        var diffHours = Math.floor((diff - (diffYears * 365 + diffDays) * days) / hours);
        var diffMinutes = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours) / minutes);
        var diffSeconds = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours - diffMinutes * minutes) / seconds);
        document.getElementById("sitetime").innerHTML = "��վ������ " +diffYears+" �� "+diffDays + " �� " + diffHours + " Сʱ " + diffMinutes + " ���� " + diffSeconds + " ��";
    }/*��Ϊ��վʱ�仹û��һ�꣬�ͽ�֮ע�͵��ˡ���Ҫ�Ŀ���ȡ��*/
    siteTime();
</script>