PGDMP     #        
            z            ots_test    14.5    14.5     i           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            j           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            k           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            l           1262    177911    ots_test    DATABASE     e   CREATE DATABASE ots_test WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Russian_Russia.1251';
    DROP DATABASE ots_test;
                postgres    false            ?            1259    178063    summary-list-of-equipments    TABLE     W  CREATE TABLE public."summary-list-of-equipments" (
    id integer NOT NULL,
    "projectId" integer,
    "unitId" integer,
    "subUnitId" integer NOT NULL,
    "facilityId" integer,
    "technicalCardId" integer,
    "installationLocation" character varying(255),
    "systemType" character varying(255)[] DEFAULT ARRAY['РСУ'::character varying(255)],
    "facilityModification" character varying(255) DEFAULT 'н/д'::character varying,
    "factoryNumber" character varying(255) DEFAULT 'н/д'::character varying,
    tag character varying(255),
    "controlledParameter" character varying(255),
    year character varying(255),
    month character varying(255),
    period character varying(255),
    specification text,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 0   DROP TABLE public."summary-list-of-equipments";
       public         heap    postgres    false            ?            1259    178071 !   summary-list-of-equipments_id_seq    SEQUENCE     ?   CREATE SEQUENCE public."summary-list-of-equipments_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 :   DROP SEQUENCE public."summary-list-of-equipments_id_seq";
       public          postgres    false    251            m           0    0 !   summary-list-of-equipments_id_seq    SEQUENCE OWNED BY     k   ALTER SEQUENCE public."summary-list-of-equipments_id_seq" OWNED BY public."summary-list-of-equipments".id;
          public          postgres    false    252            ?           2604    179261    summary-list-of-equipments id    DEFAULT     ?   ALTER TABLE ONLY public."summary-list-of-equipments" ALTER COLUMN id SET DEFAULT nextval('public."summary-list-of-equipments_id_seq"'::regclass);
 N   ALTER TABLE public."summary-list-of-equipments" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    252    251            e          0    178063    summary-list-of-equipments 
   TABLE DATA           5  COPY public."summary-list-of-equipments" (id, "projectId", "unitId", "subUnitId", "facilityId", "technicalCardId", "installationLocation", "systemType", "facilityModification", "factoryNumber", tag, "controlledParameter", year, month, period, specification, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    251          n           0    0 !   summary-list-of-equipments_id_seq    SEQUENCE SET     S   SELECT pg_catalog.setval('public."summary-list-of-equipments_id_seq"', 798, true);
          public          postgres    false    252            ?           2606    178193 :   summary-list-of-equipments summary-list-of-equipments_pkey 
   CONSTRAINT     |   ALTER TABLE ONLY public."summary-list-of-equipments"
    ADD CONSTRAINT "summary-list-of-equipments_pkey" PRIMARY KEY (id);
 h   ALTER TABLE ONLY public."summary-list-of-equipments" DROP CONSTRAINT "summary-list-of-equipments_pkey";
       public            postgres    false    251            ?           2606    178429 E   summary-list-of-equipments summary-list-of-equipments_facilityId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public."summary-list-of-equipments"
    ADD CONSTRAINT "summary-list-of-equipments_facilityId_fkey" FOREIGN KEY ("facilityId") REFERENCES public.facilities(id) ON UPDATE CASCADE ON DELETE CASCADE;
 s   ALTER TABLE ONLY public."summary-list-of-equipments" DROP CONSTRAINT "summary-list-of-equipments_facilityId_fkey";
       public          postgres    false    251            ?           2606    178434 D   summary-list-of-equipments summary-list-of-equipments_projectId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public."summary-list-of-equipments"
    ADD CONSTRAINT "summary-list-of-equipments_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES public.projects(id) ON UPDATE CASCADE;
 r   ALTER TABLE ONLY public."summary-list-of-equipments" DROP CONSTRAINT "summary-list-of-equipments_projectId_fkey";
       public          postgres    false    251            ?           2606    178439 D   summary-list-of-equipments summary-list-of-equipments_subUnitId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public."summary-list-of-equipments"
    ADD CONSTRAINT "summary-list-of-equipments_subUnitId_fkey" FOREIGN KEY ("subUnitId") REFERENCES public."sub-units"(id) ON UPDATE CASCADE;
 r   ALTER TABLE ONLY public."summary-list-of-equipments" DROP CONSTRAINT "summary-list-of-equipments_subUnitId_fkey";
       public          postgres    false    251            ?           2606    178444 J   summary-list-of-equipments summary-list-of-equipments_technicalCardId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public."summary-list-of-equipments"
    ADD CONSTRAINT "summary-list-of-equipments_technicalCardId_fkey" FOREIGN KEY ("technicalCardId") REFERENCES public."technical-card"(id) ON UPDATE CASCADE;
 x   ALTER TABLE ONLY public."summary-list-of-equipments" DROP CONSTRAINT "summary-list-of-equipments_technicalCardId_fkey";
       public          postgres    false    251            ?           2606    178449 A   summary-list-of-equipments summary-list-of-equipments_unitId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public."summary-list-of-equipments"
    ADD CONSTRAINT "summary-list-of-equipments_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES public.units(id) ON UPDATE CASCADE;
 o   ALTER TABLE ONLY public."summary-list-of-equipments" DROP CONSTRAINT "summary-list-of-equipments_unitId_fkey";
       public          postgres    false    251            e      x??}_?Ǒ?sקh??@bU???Y?6R䘢4&?2?pX?????|?À(Y?2V?]4E??????8?-???P???\dfUOVUFOUu59$R?I????_DeFDFdҙ?3??Lҙ??????l???????I???M??K?????&?g?b^~^~S>(????)?????˷???c??????W??????_???gʯ?_???.??PB???]?'??????fy???m????
????×s?x??u?9???~?-???rJrF???0???B?o_e,`???Gׁ??Y?>??Ҳ???r??҂cDy(?!QjF?4D??(?ږ?R???`fF??G??????????L#??X?Q???-?|??????v??9?a??^?jmQ??Ӑ??C?*'"'?+'g????P9?9y_9%?wef??b??????"Y?w??G??>????)???`???;?u}?B?i҉?k?,??(?P?b?I?}??~???S?P{?PFi8?;?IߕO??wv?ȭaw??ˏ׈?{}?Y?????_???F@'???*??????F"Й?Ceӎ?mk$]`=?Q>?H??FR?Ӏ?2*????H??0?m????iG"?5?ё8(?jڑ?m?{Oj(?zڑ?m?{Oj(?fڑ?-??Rd???ӎ???HEG⠌??7???Gb??{??\?﯇2?X???j??+ ~????Z?Ǔ?[???˫?;??-??????a?????_??
?|j?]??Aj-n??????;?<??x??????桌??ߌ?>?<???9?C+?8?l?ٌ2UMv?.-???!~>?0/\6?vyW?????g??U1s?+?ez~@????@f??JRN??????B????P??%| A????U?#????洸PM?0?9 ?s?#]8???%,?J??b?B?A~]>	GE_?3'??!j?'>(o???&yA%Y???{?=
??&?[>?Wޱr? Sv?R?
QMS?(?????'?p?!<???,?3N??\??(?k??P?#?B??HϺF[Aqn????????~%dKV??by????\Ti?զ?֌6??u?$|G???;??8P5P??KH?w?M?B<??a?.?Xޛ?????^~3?-?????;?? ʇ?3?,???'?g??W?I??"?KC????MĤkż?"?+??0؄@4?Ɔ2xL???QN?M$ݞ1-fg?w?R/8z??????`???Zc?u?2???z˥	ʝ?@.??r7??ޅ5???/Δ?gg/?mW"?ĝ};???(*??@F?(F?h?pJ???j}$?W????wV?&????F?OK?# ?@_a?pz???
?hc?V???!??Lo??H?}??٫?+?3?#&??U???????#??R???S??O???NGgU?ժ?v?\??Wϵ?9U???~N$???</?7?y???J??.w?%磎???????0?e??-?)???]/;?@???.?e???5???#S?W??0?~t??Y?c??W?,??G?s?????:?????_?C.?0?7???~???%9#?霼$s?A????3{??cs???=S~?NQJ=?	??7? ??????0P1?????Gm?B?D?¨?ք୤??
????f?N????˫RVR>hu5\??:$??//?!ފ????!Rl???d|??oTg?iB ??hm8?c]?<?5?&9<?+?̉.̨?Y??v?鼶=?'?i<??e??o?m?1???н?s???U.81L:?[?Q?????\?Y<hj???Ѱ-????x?	e?hh?pc??????????ٹ???G????!#?rvqw?gWw_˯?`n(???k|??nd?L??v??H?wY??$ԓIH@B3TB?Y.?Hh&?P???P	Y?M ???LB	??z??u??P?>??0ۂ?t???x&?2?50?????l??7Ee???X,??|???E_[#??E;?P1P??R?@??Bo?????9????????kU&?R??(ḛ?BQ??<??a?]ٻ|i?0?w????őtm?c???ұ?j@ ??L??B??.?bH??P??T?u???.?+???????^?3A~??>?d???j?䄂0t?t*??WL(*_4E@?h$?=V>?^?? ?$9D?g(%??\??un~jw?Թ??g??3& ??ו?5?1???!??nKRp???+|?_??C )c???u??M?9??3?????uWx?%㏪??{s???_?$<??M^?mT ???6,h?E<?D?)???<??Pv,B?n??	?0??Jt???_:i9????ܻWޥ?????gF?v???)F??bG):/`)?	B?A?_?[?u???(բ????Y#???f?v?)b?P?íX?"?&?r??~?-(???Ƒ??6[m?.!?U]<(????T?~?Ny}?(~8?S???91;\?p??͝?.?i?o??>?????????E????U1٘??aa???9?2]?P?'??{????6?+???_?=?9!?5Q?:?4?̐!F0?3?5??;???B??
??[p??????A????%??As'?e??eE?>p?#?uk?`?xR~a?`D??S??:_aC?1?d?`d??y??嶠̈`???f+g.?}
f::??\?J???r???ޅZ?O???+$?폗?.ߙ????ߺ?????c???d?6+$3?')???u?N?????B<2? ʘ??W?"s٣?
?ײ=???=?????<?do?9_?]@?u??????	??h??S~?	??r??В[w??????}Dv?\d??U?????(?L?PzywA4aB8??n????<?O??????!@?^p?qE?PƏ2v????mO?%Hls?q?[??@S?x,^?T?0Ӯ??B ??`b5?&??)?>??]k??f?a??M?(|\?l?ݣ?o?r???|?ޯ?;??R??????Q??H?3?6??s&???????z???>??R̓??R?z?r?\?k_G?}??AI??s?Z???v????_???sS%??¶-??jZt2(M(㬑{???څE??^?r??l?T????3'H?L+l4z^A N#Ѯ??s6?Qݷ^?K??4?l,ͺ??W?x?f?4tcized?+)??XA ?X?^Y??4?ZA ?X?W??? ?Fl,??+MwjB ??X?W?n?Gi??Ҙ?? ?=+(????'?Ci??mX?????#)??????[??A; #??{?+&?oО???ӥ?2.?4??ka????????f???w?ӹ?z?z ?????????c????6-O????-?9w	??{??=mB f8??Iw????{????O\(??6????"7??'??????!0?????+{??iܿ?7??~?
?L
?dw???#I/\???s??5?ɵ󸤸????z xO"??/ڽX+\?Fp?r?pg???4
 /\ ???SJ?L}T???????.j??	???q	???G2ǣ???????????:z?3??;Gm??'????y?C ^1?>PA??I??????K2??=S??'?ҧp??S???X?T?'}?B???x?#z?N?%/?@ ???
L?~??hg@ ?|??:? ?I??v?7~????'}u?=?m?p0	?-?g??m:
 o???ۃ?????)?[A ????"7ک?K??*l??,??-.^O??u͗br?X6D??????h狒{"W???x{??N⑛?"75~?P??u#&_/?O⑛?"7?F?w???+_7.??N_??.????I??l????h?3??V?X?ы><j?UԦ6Y:$._O񴯬ҾJ?&????bQG/?xMV???d???!??$?@W7e??n4??R????>*?xeL7j???v?o?m?E?'uy?۪}x???m3Waf?^??_{??xW???L??)vۑda:տ-(????bk???J ??+?t\ cw????D2?h?^?V??Ǭ??V?    ?m?jA ?
???oܖ??n?????%|tt8?C??fKc?Xވ?H?V??+{???t?D?HbAlC???zh??????]#օ`h?;??뢇TF??b?T`1???gl0??`ZHe?K?!?\b%?F?b???쁵 ??8F.?G.??K?????"kZʘ!k?jU?Ē???L$:?-(???Z?zi?h?Sǈ%m???T? ??k??z?$?u˴??oA?=H?oIφ?2XqO??{??+??o\ݣ?%<tɺ??M??E???t??=????ٿ?	????????????g_?6߽z?og?k????0??K?f????¿??2GM$R?ID?D??y???4!?HO&??qT"nKY?nWu??TIb%?D?o??msM$
WZ`?Ls?Λ?0N?)A?Ξ[??3Fa?0TS?յK?[??+S?hW??v?X?n?B?X?X8?3?X7?綳???|f?1?Z?X/|???niI)?H)80?VR???β?F^?)X??N?"?ʛ?	????Gj???v?8?-D??"?1ǉ???5??@?=?"???????C;???u??G_????G+.??ҝ?»??5!??3??]j?????38\a]?j:i?&?SCT'!Z???g?9?)x?D7!??9????Qn?ޑf???B?2??,G?????w?/???J?#???0??;P??~?w6??[??}ǧ^?O?/?ǡ|X?x?&???C???g?>???+$???P*mͺ????P?yO?i??????c???P!?#?]?Յ2-:?AA?=???Hx? "nw(v?L?~?YX?oRڵE??AםH???#??!?i??>=1????????I?*v4N??Zh? ?2sD???5?^׳l?_w????n?wS(?81m?B6_?6????l[?????E? ???"????_7????0?4Ϸ?߅$?n?[#iAYA?Cyܽ?????Fd_???????*Gc?-^??m??zc:PV?`???T?A???a*??-G????}?j?yR~;ٸl????q?PV?`\Uku?Ī?u?N???????J????f? ^?@Yq?E???Ưs?"?lӆn?amq??HM?G0??V.?:5g+?	={ᬿ?qm???}?x?5?G???'.iy4?[???9_n??mK?a%??~d??)Q??bC?fiD?
??h;.ŻE?zؙkⶇγ?*ӂ2qtR6]?巺-1?Y^w???ZHwNaN??Iu?c??c??qYM(+d?Q6?F?ty??S??????c?0a?	?	e?<Q;?????????.?(???Z??RROu??W?d????1??h\?s??5?<????uc?.S?ت??SG{~?#??߭??t????n?Eo??R??`??U?ޠ?mN״YlB??	X????`g???ҏ)???????j?jG??E
????E?h???)]Yس?	????]??.?e7 ?L?a?v? ???<%??_=?????7)?ៜ*?????7O????gN???]o/????\3!?!:?[?G;??ul?E'i?D2V?W?ƻ??w?????Ϋ?	????hS?s?.\?jQt?[Pf???;b;6F?.?????Ȉo??	??k?{^k??`??y??j??v
?l$W?+>l??X?N?x??ѩ????b??t???'}?xg6?bL???{?i 2z,~?8	揓X{?W?uI0?_?????!?7:F?o??w?L??a?҄҂(!!????!EO??|??ݑ???_a????F??Df???V??ΦC??^?KW?M?Hac??K?7|???K?/=?DDU?kY?Uy)??Z?|?,q{?;"_O%N??ܠ??H?KWcmK??W@ ?&mK?L?^??ʠ?????H{ ߹??7?%???;Crw~??J+???????ƺ?H{?J???Xu?\[H;?]*;%"??b/D??е??Kj\G??4??R3T?i7??5Lb??{?5r??
?Dt^Ҍ?&?X?S/:????Io???}wbL??d"G?????B#?'sߒ?5>?W1I/???K?b?N?1I?6?Eo?:B@???4??:1????xj}7?aÈ\?gٳ'?Z?b?N}؋?P@ ߨ??????>???T=?FlB?o?e?Ʀ^TE?? ?o??&A|WbL?~/??O2?I@F?$PYTk`??6??????l?????c?????M513L????w??????u???/?v?????pfv?B???}?n??{??k???3??H?XFرҞ?w5gD?B?uov???,%????]?Y????M(??dw?0wWIC?cn??b??Lu?'/&??^????Tb??N6!?p??J 8m?E%V???_???O&???g?=%V??m?M$?Ih@B9TB䆆??$??Ѩ??ǔ???^?a?{?}v??
0???s?0CE??oSF?;8|Ռ*?s? ??dA:?S??s?;lQ?.God?;??"?y??P&W?J5D?_?fB?????-?銢]??Z??gۄ??pq??_????dY?>Hb??ڦ?m?.?,?MXi?y?M???i?|???3@¤?v88??4???/?n??H?'????0????ԍ??ݳGm!ˎ*;?Ԅ?8?}?b?1??}tR3K?o????{.랼Մ?????j????J=?SI???L??,i???W?]u$tK0?k?.0?{Y???Y???D?????+??_i????0?C??ͷKv?{g??l??·??9b???z??ɞ#l?i???"؄???cl??2??j??3?Zk?{?r/????? ??bv q??<?V?2????[?4V?+??\=Xm???6???I?2@??M??PG??+??]8fԶ'?w?'M$?3)??2|???;n+? [;??Vl?	!`?l???-?dM\??h?8Yϛ??????&?O??5~??y??S??ֻ]M 9\G????,??-<e?"?y^??ܙ??݂?g???b??uhB@}?u?.$oex??"??'?????6! ?=??kD@?y??????֐glq')?t^?&????????)?????sY?d(??????f?N?W?_??!&?,??B??jq3???'?k$̽N?^??(??e?g/r??????򯶵d?}?OʏsK(?g`26?L???r?m?<?:?p??ӜPWW'm]????O???6?ȅ/e?A??? ?,??V?|?՞????D?sn/ZҜu?!??N(=?Jzm??T?>{?YW?[Nz;ѽe_?'???.???5???Dc̞?????c?????Cg ?????c@????UA???,?&x?f{r?l?Ê~	Dg?_?I??E?\cH/7??j?R?S?^?????>?Q7~t4?Q???`?*??
!??Z???h???b??=̊O?ۧO????	? ????JL?0??M?j|?y??1???Hrn???'?@?_??H???9??ҟ?ֽf??ˡQݷ2? /?[??s}????A??&v???6?-?Qlk?ϧVX?(?~u[P&$i?Hl?|???
?.?yi?	P𼂷׳?Ӎ?/???;??L#??͵??a[>?	k????T?_i????8y?????c}ެ?A 6??=???v<?#?ޅ?,?lTm0w??Z???ڂ``"6?!)>,6????#p?#?jB0????????;1??w<?M?????g|<?,a??????x`ʙ????M??Ö????????w?/=*?[???wAhm?????n????~??ۃ?G,?,O??F?A?????U?0۽?ak?nϧvQQ??mA0??!?D???}????????\?Μۄ@?b3??
d? aM?B?P????	^tf?&?5V[????:?????Vm{Y-w?t??W?O|G(??A??uV?a8?9?3?캾};;?=????]?=i\??u{??o:_W??I'?p97?}D;?Ղ`?*[??^?f?k?r???ɞ??V?@?P&
6s?5?4/??ڳ~լ?w?Z???m??l    ??[H??????ݢ???=.?f?I????7?7???=?Ӗ????'??;??g?u=???v??3oV??n???{r??9??F??ww?no?|??????n?_???ѿQl??9DM?D?1????wQ?????S?=J????}??????m͜?p?]}"y?Mr7ӾO???W??1:?a?]?E?|>?|
SIb?C1??b?/????'???mi1?WM???Ӵ!?q?h?u??(??8????^,??z?4{5f?????e?n?A?z?'??c????(???1?^L??????I?N?|??J??D|?]????xZOa?????lU?r?~|c?????eP \>x?????j?=@Y?X?@???"@j?t^d4s?w֫???xJ???d6???.??6????=?n??$?4??x?!/??@??Ӱ?? VK;??Y?o?_??J??????>v?_Q?bac ?]??]??}???p$?خI?Q??=Q??&A??쒒????߄m?1,@5,`?{[b&2??d?̓??$?ǰP:?????ǆ7?`f??ʛdX??a?D&??0}'??uG???(?V? ??l?!M?>???:????????9=CMy?E>?@ 
????ی?^???1?!?@??_ ?????????C??˛?%YYPu??3ʵl? &?I?z??ǈ
k(???*????Uw????W?B3?w?[/???^??R???zB??v?b???5?k,Y?8k?a+Yk`=?!????ڃ?7ƪ^T=O???X>>?@?|?D??D?????cկ?_$??T???w?!P???{[?ª?چL?1?6
$?PC`??f?5?d#???ؾS ?5??qD,%0P?th??rc5/hd!?@?:????r?lF??|R~a?:?r?V???y#s ?f?2??9?
{ݜ?9?fL???d9?F?w?h????-d?y????04l-\?\??~g;K?o?{!?v)??_? >???P0'?B!?r}?󊲇I??*z???I?H?HFr??Ġ9*e?52??*?8^? Z?.???%????)?
??O2?+?l???M??M?qN?O{?fc?~f.?ɦ?@S????y?;©?????^e=?n???q*#?!t?1t?Dw?S?z&??????Z9?k	?ݿ?????(?x2RW?H??R???????*??L7㷖p???	M?J?U?7?ތ?M?y?|??!???
???P&9???'?????<M?Q^??x(???????綰81ޥ???9kg??ܭ??$?c?2?qV1?G2??1Z?z?g??v"?$1?U?ޡ??q9??ub<F??m?T6ف?㏧?J?U?@??k$???~?w?RC???h?7D?#?%/?j?'-M?%MQ-y(??D??>?aUP?ٲ??8A%?V??s?'=v?X?>hC?????¯???=?ߙk?S?<?/????v??+???Z???H/^?g??h???c?A??cu?GX۶5?d'??????m2??I?t??V
??G???l?h?`z?A<?k?d???%(?x-CEWg0?*?????u??WMBh˘?E5]g8?Ǎ??kZ??/?Q{????VG?}??????O?o_?=ݷTK?!?[?S??'S??"?vۺ???K?7???.?][䚴?]????Z ?v???ôK?v???hi@ eR??7??*:?????φG?@8?Pt??ĺ?6????<?Ng????n?_wgԑ?/??NNٍYE????^n=??YR??V????????6?P????cWH?y?*?7-}??g?N?As???::?WeR4́m?D???a??c???L??/g???=S?????^ ޙ?i~h??R?e?W?g??*?'esF?G)????w???"Fyo]O?Y??U??
u[el????U???72q{????'oTk
 PO+?W?2?:&'Z??/U?Z??-?'u=???>??ep??ӯ??v? շ2ń?y?:!???R?w???˯?[?]???r?~X}?	???xϷXG?.TYl[?,?rU???P&U??c}?NaŅ??o??F??XUa???=???ܓz?Ȧ??3???t??? #?????{1*͛?g?'?oK?C?f??YL?=6l??k??8~>???m?p??ooQ?ޟ??Ұ]SP??G???h?±?D,???w}?U9?,?w??}?e9??,d_?|X?????$?ؖE???Z!?"1څ`'?֥?U<ua???X?-??kWЕ$j
GWh<w9?b=?WX???xmz*??UY?????]?5??h??jw?y~??U???u.? ??L?V?p??Ώ?)MDoJ??????T???]ʕ?L?!?{41????????v???3Nn!óp???@U!?j:??;V???!~?}??PJ?y?????)????????8X??tZϦb+:I????nd?? ?%?????Mi{?G?i???~??U??[??ￅ?v?????q???_jU???V???-??c?5z?[?K:?8J?F?????%?%???RTz)???tu?|????P&	???`#??i?i??r?!???9??Q.??c??:4????????*?Y??8?M?z?????Gv??(????! [??^?N?nIKG{?X5xj?T?)#?^$?c?
?pQ?F??????"8?z?i???j????p??p+?G?m???vF?_	?K*ދ?xO??(??ZTKhш-?4??)&ʫ?M]xS/?Xʓ?Gy?g????>???L??
?$??RC@y#Z-??	|?JʦcD3Ķk??ÈNe3z#` э??g?oݽt)??;?i?d??L僚??P???*?6C?NF??D?? ?????|?\M?'?c??L?]?M?X???\qZѵ??P*B????'??*????a??dL^??#??DGYJUE?????! ???͓??+L?!`\g?t????2?.?h?! >[??ד?G??N+?!?\??^?k??H?!`\3??_H??%W?????F?)?X?ˇ?????;>????b?|?(O?b?W?ml?P?(>?;???Z?VlK???q????Ob?P? qj???kXgc\E?????D?Ŏ?!????<??E?5??b??%??ٷRťS?g?^????^I?pw?Ţ,?FyŗRQ/?jmd?&(Ji?(?XuP?A0??.??}?Ќ]?UC@?Bs?~?\4??!???Ќ7???샓???~?f#:2K??賆ht??҅?Ʃ??"f?i????;???8?S\e?Z???2??O?M?UtGY?e&?t#A$Kl8?
;N???j9??Ժ?]$+?????n?}tI}%8?h???5L?%<??QZ?eR?ˤKy??????^????5?I?ف???uD?v??2??0?ӾY?MM?|????F4???????uLs4A???R?`mv`??d-?8??|(?)R?҉?Һ??Ew?>6Pw???Ɏ?jP??C@y#?l???=>W??????!????F$?ރ?2?? ?N{?W???!@?i??3????N??v??1??+?O?{?X??(΋??JJ?Fy?NᨡL?FL?.??Rn뽫???-Z?&a=????<?+Q^q?+????????(?u=??H??8?}?wu?Tb?M-:??D>*?t?g?ʣ?j4??p.#??[??4?l?$??U?SA?~95?bd??H?SC@??z?????U??????|?W?ƚ???)ȏ??^ZC?ypj?☿???S?
T?s??J$???L?q???5,??,?p??ӰL?3?jXfCXN??;m???e???9???d"?%γ?x?x~?B??x?.|?!?Y6x??I??YN2??Fp?A?h??Y$we?a?H????????)?!`??g99tq*??^C?r1??d?1*???k(S??,㎆H???????0??C!??ʖY?cܙə[C2E?9?AX?S?L??2G??b?i?Q)q?eŲ??rr??Tj|b??Ԭ???l9F%?i?U?Y??e?ɐə?y?jh*X6?XN?\?Ktʨ??U4XƝ9???54cǳ?P ?  ??Qh_?hVə?Y?n??!`?a9-?1*??kXf?YN?\?J?g?e?e?|?ɖcT2t???,B?q7C%gnϸ?!+GC?a<'w.F&v?MϪ?3?Щ?Э!-??N??G1?=?#Y'w?;?e3???F?T?a5,?YN?\?J젏ʔ!CXN???3?*?lh?2?f??έ??%???g6???????sͪ?5??w?tr?p?5A7[=Dq çg?:?e??KW5]Fa9-?1*?X[W??Q?YN]?J<??U?m???-ǨD???dMcB?q7?$wg%????qr?bT??\?*?*H?gܕ3ɕ[C4G?F????s?\9?e<?6U?]?!,??/F%^?e?????g9?rq*???jXCXN?????̬!`Y?,??F???5<3????????????5<?ϸCW$?n?؍?5DQ?@?gJ?C????NU?TQa9-?*???Mʚ???&G.F??`1v?t?ɆcTr$_TC?2YFKsr?P?%????̇?????? 5<?Ϩ#D'G'?@?5D?ħg?9?eJ???C???rZcT2?eV??????8?X?]C???r???X?]C?r??;49tkx6????LS2????E?D??!??6x?:??5Dc?\5D??§g?:?e???c>???Ƙ??yjX?YN?\?J?j?????-Ǩ,?寨?????/?}????)ʳ??g=???????hx?!??4x?ݹ?6ꉈ?μJ8? ?Ow??6?5,c5]5?iF?????XMW˴??ɡ?R)???????-ǨD'Q?<?w3?m?XƎ??!?Y?9?s12?? jx??qw.???h?6???8puRsy??M6!*w\?`?$7?I?,???l???S}\??u?P??KVe^???s=??/??U?+s??9 Sq??߲??9????L?5^?%??/ć??[????};????y?!?Ҟ?א??ɪ ??H???iHWx???????߹?/?vt?:???-?CT???6? 5{UY??L)??,P??C?9?
^?+?'R^d??"3?&S?N*??lp?Jz2???.Ϛ?K??@f2I??#?kTP4U?G????N??n?ʴ ?
T?????z???? ??`?-?P>^?kٺ_~_~Q?_?U??U?N+??o,߂??x?[??	????????+|??????!?~??a ??w?ۜ?N'??5??VC?\?岤ܧ?\4??cӂ?TD?,??C??I9??NyQq??#)?(????3?0k(Z??! ??˞???8ONA?X????[1:???O??Rr*F.v?[???I=??u??H?z?X?N???q?z<?HO?z?Y??T??3?G9w??H?z?؂???????I=?z5??4???eh??C??$2?N3?(%I??$GQ%9d#֣4??E?Ҵ??=q??@l??`?? ?:1?5?^zt?'{ҾO?g?좨?.???5H?g?h?CȂ??#4 ?????76

X?xy????????~Ƹ???@???X~?????c?
?xQ??I?~?:??j#7?X ?????~̻??O1W??hyE ?E????|?ߤ?????v(ӊlH|*????&	  ??_^?\????<T?l?g??u闿_????˭?mw?gA??,W_????????v}???W姖???[0????wZZ????셳?m?߳???????uy?n?/ߛ???V;~???j??a?$??c?(?k+QH??Y?BD?v??ʏs?_ygQ?ɭ????O????3??*?_ϫo??e?????F??h?k ?	?gkB4???6??y?&?*lS?Яm???9%?͜?7ٹ????????#?v?<???Nᴇ??޳z????)????_  ?(??HN???~???0!?d?W?k7?G??t?-?5]?*?V:T??W?Rv)F???`*=??^???D???wx?P?ZУ?`?D?c?z_ʴnt??|????a sp?n????'?y??].lꭦ??ihG#?*?ִI:D:ݽr)???V????w??]?=??V??UQeV5o?.ў???g?W??????~p>??eV?˩?2}t?$-t?$?01???????
?G??h????*u?ܠ?u:???_?????mf

.?.?Or?????9s?ά,n?Hz9?jG?b?u?J??XdY????0?     