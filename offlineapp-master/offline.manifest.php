/* manifest ��׺�Զ���,ֻ��ָ�����ͼ���text/cache-manifest��
   ���·�ʽ������manifest ��js���� ����ɾ�������ļ�

   var appCache =window.applicationCache;
   appCache.update();
   if(appCache.status == window.applicationCache.UPDATEREADY){
        appCache.swapeCache();
   }
*/
/* վ��������������Ϊ5M
    ����б�����һ������ʧ�ܣ������ʧ��
    ����mainfest��html������mainfest�ļ�ͬԴ
    CACHE MANIFEST  �ز������ұ����ڵ�һ��
    ϵͳ���Զ���������mainfest��html
    manifest�ļ���CACHE����NETWORK��FALLBACK��λ��˳��û�й�ϵ���������ʽ������Ҫ����ǰ��
    FALLBack�е���Դ������mainfestͬԴ
    ��Դ�������ֱ������Ե�ַҲ����ʻ������Դ
    ����ҳ�����û�����棬��ԴҲ��ӻ����л�ȡ
    mainfest�ļ��ı�ʱ����Դ������Ҳ�ᴥ������
    ���θ����´���Ч
*/
<?php
header("Content-Type: text/cache-manifest");
?>
CACHE MANIFEST
# 2012-12-09 v6

CACHE:
# �ⲿ��д��Ҫ�������Դ�ļ��б�
# ���������·��Ҳ�����Ǿ���·��
jquery.min.js

NETWORK:
# ��ѡ
# ��һ������Ҫ�ƹ�����ֱ�Ӷ�ȡ���ļ�
*

FALLBACK
# ��ѡ
# �ⲿ��д�����ʻ���ʧ�ܺ󣬱��÷��ʵ���Դ
# ÿ�������ļ�����һ���Ƿ���Դ���ڶ������滻�ļ�*.html /offline.html